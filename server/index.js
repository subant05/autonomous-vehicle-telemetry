import express from "express";
import fs from 'fs'
import morgan from 'morgan';
import path from 'path';
import ApiRouter from './api-routes/'
import dotenv from 'dotenv'
import { postgraphile, makePluginHook }  from "postgraphile";
import PgSimplifyInflectorPlugin from "@graphile-contrib/pg-simplify-inflector";
import ConnectionFilterPlugin from "postgraphile-plugin-connection-filter";
import PgPubsub from "@graphile/pg-pubsub"
import {JupiterSubscriptionPlugin} from './plugins/postgraphile/subscriptions'
import posix from 'posix'
import cluster from 'cluster';
import { cpus } from 'os';
import process from 'process';

const numCPUs = cpus().length;

console.log(numCPUs)
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });

} else {
  console.log(`Worker ${process.pid} started`);

  posix.setrlimit('nofile', { soft: 10000 });
  const pluginHook = makePluginHook([PgPubsub]);
  dotenv.config({ path: './.env' })
  const app = express();
  // const requestLogStream = fs.createWriteStream(path.join(__dirname, 'request.log'), { flags: 'a' })

  app.use(
    express.urlencoded({
      extended: true
    })
  )

  app.use(express.json({limit: '100mb', extended: true}))
  // app.use(morgan('dev', {stream: requestLogStream }));
  app.use("/api", ApiRouter);
  app.use("/", express.static(path.join(__dirname, "./dist")));
  app.use(express.static('./dist'));
    app.use(
      postgraphile(
        process.env.NODE_ENV === "development" ? process.env.DEV_DATABASE_URL : process.env.DATABASE_URL,
        ["vehicles"
        , "topics"
        , "images"
        , "geolocation"
        , "notifications"
        , "state"
        , "detection"
        , "logging"
        , "production"
      ],
        {
          appendPlugins: [
            PgSimplifyInflectorPlugin
            , ConnectionFilterPlugin
            , JupiterSubscriptionPlugin
          ],
          pluginHook,
          ownerConnectionString: process.env.NODE_ENV === "development" ? process.env.DEV_DATABASE_URL : process.env.DATABASE_URL+"?ssl=true",
          watchPg: true,
          enhanceGraphiql: true, //process.env.NODE_ENV === "development" ? true : false,
          ignoreRBAC: false, // Role Based Access Control (RBAC)
          extendedErrors: ["errcode", "detail", "hint"],
          graphiql: true, //process.env.NODE_ENV === "development" ? true : false,
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
}