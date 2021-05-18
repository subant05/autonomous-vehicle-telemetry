import { gql } from 'apollo-server-express';
import queries from './query'
import subscriptions from './subscription'
import types from './types'

const typeDefs = gql`
   ${queries}
   ${subscriptions}
   ${types}
`
module.exports = typeDefs;
