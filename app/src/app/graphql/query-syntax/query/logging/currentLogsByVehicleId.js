import { gql } from 'apollo-angular';

const currentLogsByVehicleId = gql`
query Logging ($cursor:Int $vehicleId:BigInt $paginationRange:Int $nodes:[String!]){ 
logging: vehicleLogViews(
    first:$paginationRange, 
    orderBy: READINGAT_DESC, 
    offset: $cursor
    condition:{vehicleId:$vehicleId}
    filter:{
      node:{
        in:$nodes
      }
    }
  ){
    nodes{
      id
      readingat
      vehicleId
      name: node
      function
      file
      level
      msg
    }
  }
}
`

export {currentLogsByVehicleId as default}