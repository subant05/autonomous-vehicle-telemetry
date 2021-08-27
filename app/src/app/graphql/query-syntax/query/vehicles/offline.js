import { gql } from 'apollo-angular';

const offlineVehicles  = gql`
query OfflineVehicles {
    vehiclesOfflines(filter:{decommissioned:{notEqualTo :true}}){
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