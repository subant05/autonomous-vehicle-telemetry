import { gql } from 'apollo-angular';

const vehicleLogNodeTypes = gql`
query LoggingNodes($vehicleId:BigInt){
  vehicleNodes(orderBy:NODE_ASC condition:{vehicleId:$vehicleId}){
    nodes{
      node
      vehicleId
    }
  }
}
`

export {vehicleLogNodeTypes as default}