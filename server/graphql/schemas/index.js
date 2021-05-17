import { gql } from 'apollo-server-express';
import queries from './query'
import subscriptions from './subscription'

const typeDefs = gql`
   ${queries}
   ${subscriptions}
`
module.exports = typeDefs;
