import { gql } from 'apollo-server-express';
export default gql`
    type Topic{
        name:String!
        type:DeviceMessageType!
    }
`