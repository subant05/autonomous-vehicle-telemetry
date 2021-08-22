import { gql } from 'apollo-angular';

const vehicleLogNodeTypes = gql`
query LoggingNodes($vehicleId:BigInt){
	vehicleLogNodeTypes(condition:{vehicleId:$vehicleId}){
    nodes{
      nodeType
      vehicleId
      vehicleName
    }
  }
}
`

export {vehicleLogNodeTypes as default}