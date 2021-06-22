import { gql } from 'apollo-angular';

const onlineDevices  = gql`
subscription {
  listen(topic: "online_vehicles") {
    query{
      vehicles{
        nodes{
          vehiclesOnline {
            vehicleId 
            vehicle{
              name
              type{
                type
              }
            }
          }
        }
      }
    }
  }
}
`

export {onlineDevices as default}