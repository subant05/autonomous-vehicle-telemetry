import { gql } from 'apollo-angular';

const onlineDevices  = gql`
subscription sqlVehiclesOnline {
    sqlVehiclesOnline {
      event
      row {
        id
      }
      vehicle_online {
        vehicle {
          name
          id
          vehicle_id: id
          ip
          type{
            type
          }
          vehicleStatuses(first:1,orderBy:ID_DESC) {
            nodes{
              alerts(first:1,orderBy:ID_DESC, condition:{dismissed:false, read:false}){
                nodes{
                    read
                    dismissed
                    message
                    vehicleStatus{
                        vehicleStatusDetails{
                            nodes{
                                description
                                isActive
                                isRecoverable
                                id
                            }
                        }
                    }
                    alertType {
                        name
                    }
                }
              }
              state {
                description
                code
                name
              }
            }
          }
        }
      }
    }
  }
`

export {onlineDevices as default}