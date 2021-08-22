import { gql } from 'apollo-angular';

const vehicleLogNodeTypes = gql`
query LoggingNodes($vehicleId:BigInt){
	vehicleLogNodeTypes(orderBy:NODE_TYPE_ASC condition:{vehicleId:$vehicleId}){
    nodes{
      nodeType
      vehicleId
      vehicleName
    }
  }
}
`

export {vehicleLogNodeTypes as default}