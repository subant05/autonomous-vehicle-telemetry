import express from "express";
import { createServer } from "http";
import fs from 'fs'
import { ApolloServer } from "apollo-server-express";
import { PubSub, withFilter } from "apollo-server";
import morgan from 'morgan';
import path from 'path';
import apiRouter from './api-routes'
import graphQlServer from './graphql'
import dotenv from 'dotenv'
import * as EventContants from './graphql/constants'
import Database from './database/index'
import LevelDB from './database/strategies/leveldb'
import postgresDB from './database/strategies/postgres'
import { postgraphile, makePluginHook }  from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgPubsub from "@graphile/pg-pubsub"

const pluginHook = makePluginHook([PgPubsub]);


dotenv.config({ path: './.env' })

const db = new Database(postgresDB);
const pubsub = new PubSub();
const app = express();
// const apolloServer = graphQlServer({pubsub ,events:EventContants, app, db})
// const httpServer = createServer(app);
const requestLogStream = fs.createWriteStream(path.join(__dirname, 'request.log'), { flags: 'a' })

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json({limit: '50mb', extended: true}))
app.use(morgan('dev', {stream: requestLogStream }));
app.use("/api", apiRouter({pubsub, eventTypes:EventContants, db }));
app.use("/", express.static(path.join(__dirname, "./dist")));
app.use(express.static('./dist'));
app.use(
  postgraphile(
    process.env.DATABASE_URL,
    ["vehicles","topics","messages","geolocation"],
    {
      appendPlugins: [PgSimplifyInflectorPlugin,ConnectionFilterPlugin],
      pluginHook,
      watchPg: true,
      enhanceGraphiql: true,
      ignoreRBAC: false, // Role Based Access Control (RBAC)
      extendedErrors: ["errcode", "detail", "hint"],
      graphiql: true,
      subscriptions: true,
      simpleSubscriptions: true,
      live:true

    }
  )
);
app.get('*', function (req, res) {
    res.sendFile(path.join( `${__dirname}/dist/index.html`));
 });

// apolloServer.installSubscriptionHandlers(httpServer);
app.listen(process.env.PORT || 4000);
// httpServer.listen({ port: process.env.PORT || process.env.WEB_SERVER_PORT }, () => {
//   console.log(
//     `🚀 Server ready at http://${process.env.WEB_SERVER_DOMAIN}:${process.env.PORT || process.env.WEB_SERVER_PORT}${apolloServer.graphqlPath}`
//   );
//   console.log(
//     `🚀 Subscriptions ready at ws://${process.env.WEB_SERVER_DOMAIN}:${process.env.WEB_SERVER_PORT}${apolloServer.subscriptionsPath}`
//   );
// }).setTimeout(1000*60*10);
