import { gql } from 'apollo-angular';

const alertsSubscriptions = gql`
subscription sqlAlerts {
    sqlAlerts {
      event
      alerts {
        id
        read
        dismissed
        vehicleStatus {
          id
          vehicle {
            name
            id
          }
          state {
            description
            name
            code
          }
          topic {
            name
          }
          vehicleStatusDetails{
            nodes{
              vehicleStatusId
              isActive
              isRecoverable
              vehicleStatusReason{
                name
                id
              }
            }
          }
        }
      }
    }
  }  
`;

export {alertsSubscriptions as default}