import { ApolloServer } from "apollo-server-express";
import typeDefs from "./schemas";
import resolvers from "./resolvers";

export default function getGraphQLServer({pubsub,events,app, db}){
  const graphQLServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      return {
        pubsub,
        events,
        db
      };
    },
  });

  graphQLServer.applyMiddleware({ app });

  return graphQLServer
}