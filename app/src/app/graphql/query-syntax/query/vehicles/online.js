import { gql } from 'apollo-angular';

// const onlineVehicles  = gql`
// query OnlineVehicles {
//     vehiclesOnlines{
//       nodes{
//         id
//         vehicleId
//         vehicle{
//           vehicleStatuses(first:1,orderBy:ID_DESC) {
//             nodes{
//               alerts(first:1,orderBy:ID_DESC) {
//                 nodes{
//                   alertType {
//                     name
//                     severity
//                   }
//                   message
//                   read
//                   dismissed
//                 }
//               }
//               state {
//                 description
//                 name
//               }
//             }
//           }
//           id
//           vehicle_id: id
//           name
//           deviceId
//           ip
//         }
//       }
//     }
//   }
// `

const onlineVehicles  = gql`
  query OnlineVehicles{
    onlineVehicles{
      nodes{
        vehicleId
        id
        ip
        vehicleName
        deviceId
        alertSeverity
        alertName
        alertMessage
      }
    }
  }
`


export {onlineVehicles as default}