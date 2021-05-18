import { gql } from 'apollo-server-express';

export default gql`
   type DeviceMessage {
      timestamp: Float!
      topic: String!
      msg:[String]!
      type:[String]!
   }
`;