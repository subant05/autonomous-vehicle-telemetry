import { gql } from 'apollo-angular';

const vehicleLogNodeTypes = gql`
query LoggingNodes{
	vehicleLogNodeTypes{
    nodes{
      name
    }
  }
}
`

export {vehicleLogNodeTypes as default}