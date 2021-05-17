import express from "express";
import { createServer } from "http";
import { ApolloServer } from "apollo-server-express";
import { PubSub, withFilter } from "apollo-server";
import fs from "fs";

const pubsub = new PubSub();
const DEVICE_MESSAGE = Symbol.for("DEVICE_MESSAGE");

import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const PORT = process.env.PORT || 4000;

const router = express.Router();

function returnHTML() {
  return function (req, res, next) {
    const file = req.url==="/" ? "/index.html" : req.url
    fs.createReadStream(`${__dirname}/../dist${file}`)
      .on("open", function () {
        res.status = 200;
        this.pipe(res);
      })
      .on("error", function (err) {
        res.end(err);
      })
      .on("finish", function () {
        res.end();
        next();
      });
    // res.send("home page");
  };
}

// Web App.
router.get("", returnHTML("index.html"));
// Devices.
router.get("/api", async function (req, res) {
  await pubsub.publish(DEVICE_MESSAGE, {
    deviceMessage: `From Device ${new Date()}`,
  });
  res.send("device");
});


const app = express();
app.use("/", router);

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    return {
      pubsub,
      events: {
        DEVICE_MESSAGE,
      },
    };
  },
});
apolloServer.applyMiddleware({ app });

// 404
app.use(returnHTML("index.html"));

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
