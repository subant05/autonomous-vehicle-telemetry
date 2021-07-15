import { gql } from 'apollo-angular';

const alertsQuery = gql`
query Alerts{
    alerts (condition:{dismissed:false}){
      nodes{
        id
        alertType{
          name
        }
        read
        dismissed
        vehicleStatus{
          id
          vehicle{
            name
            id
          }
          state {
            description
            code
            name
          }
          topic{
            name
          }
          vehicleStatusDetails{
            nodes{
              isActive
              vehicleStatusId
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
`

export {alertsQuery as default}