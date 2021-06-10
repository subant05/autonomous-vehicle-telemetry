import { gql } from 'apollo-server-express';

export default  gql`
   type Query {
       hello: String!
       geolocation:[Starfire!]
       topics:[Topic!]
       imagePair(topic:String! cursor:Int!):[CameraPair!]
       segmentationMap(topic:String cursor:Int!, id:Float!):[SegmentationMap!]
   }
`;