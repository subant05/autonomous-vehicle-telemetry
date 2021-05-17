import { gql } from 'apollo-server-express';

const typeDefs = gql`
   type Query {
       hello: String!
   }
   type Subscription {
      deviceMessage: String!
   }
`;

module.exports = typeDefs;