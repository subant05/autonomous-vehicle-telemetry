import { gql } from 'apollo-angular';

const offlineVehicles  = gql`
query OfflineVehicles {
    vehiclesOfflines{
      nodes{
        deviceId
        id
        vehicle_id: id
        name
        ip
      }
    }
  }
`

export {offlineVehicles as default}