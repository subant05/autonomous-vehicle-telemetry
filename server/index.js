import express from "express";
import fs from 'fs'
import { PubSub, withFilter } from "apollo-server";
import morgan from 'morgan';
import path from 'path';
import apiRouter from './api-routes'
import dotenv from 'dotenv'
import * as EventContants from './graphql/constants'
import Database from './database/index'
import postgresDB from './database/strategies/postgres'
import { postgraphile, makePluginHook }  from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgPubsub from "@graphile/pg-pubsub"
import {JupiterSubscriptionPlugin} from './plugins/postgraphile/subscriptions'

const pluginHook = makePluginHook([PgPubsub]);


dotenv.config({ path: './.env' })

const db = new Database(postgresDB);
const pubsub = new PubSub();
const app = express();
// const requestLogStream = fs.createWriteStream(path.join(__dirname, 'request.log'), { flags: 'a' })

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json({limit: '50mb', extended: true}))
// app.use(morgan('dev', {stream: requestLogStream }));
app.use("/api", apiRouter({pubsub, eventTypes:EventContants, db }));
app.use("/", express.static(path.join(__dirname, "./dist")));
app.use(express.static('./dist'));
  app.use(
    postgraphile(
      process.env.NODE_ENV === "development" ? process.env.DEV_DATABASE_URL : process.env.POSTGRAPHILE,
      ["vehicles","topics","images","geolocation", "notifications"],
      {
        appendPlugins: [
          PgSimplifyInflectorPlugin
          , ConnectionFilterPlugin
          , JupiterSubscriptionPlugin
        ],
        pluginHook,
        ownerConnectionString: process.env.NODE_ENV === "development" ? process.env.DEV_DATABASE_URL : process.env.DATABASE_URL+"?ssl=true",
        watchPg: true,
        enhanceGraphiql: true,
        ignoreRBAC: false, // Role Based Access Control (RBAC)
        extendedErrors: ["errcode", "detail", "hint"],
        graphiql: true,
        subscriptions: true,
        simpleSubscriptions: true,
        live:true,
        retryOnInitFail: true,
        rejectUnauthorized: false,
      }
    )
  );


app.get('*', function (req, res) {
    res.sendFile(path.join( `${__dirname}/dist/index.html`));
 });

app.listen(process.env.PORT || 4000);
