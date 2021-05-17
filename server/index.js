import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { PubSub, withFilter } from "apollo-server";
import morgan from 'morgan';
import path from 'path';
import apiRouter from './api-routes'
import graphQlServer from './graphql'

const pubsub = new PubSub();
const DEVICE_MESSAGE = Symbol.for("DEVICE_MESSAGE");
const eventTypes = {DEVICE_MESSAGE}

const PORT = process.env.PORT || 4000;

const app = express();
const apolloServer = graphQlServer({pubsub,events:eventTypes,app})

app.use(morgan('dev'));
app.use("/api", apiRouter({pubsub, eventTypes }));
app.use("/", express.static(path.join(__dirname, "../dist")));
app.use(express.static('dist'));
app.get('*', function (req, res) {
    res.sendFile(path.join( `${__dirname}../../dist/index.html`));
 });

const httpServer = createServer(app);
apolloServer.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: PORT }, () => {
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`
  );
  console.log(
    `🚀 Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`
  );
});
