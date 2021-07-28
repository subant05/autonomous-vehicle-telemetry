import { gql } from 'apollo-angular';

const vehicleStatus = gql`
query VehicleOnlineOrOffline ($id:BigInt) {
    online: vehiclesOnlines(condition:{vehicleId:$id}){
      nodes{
        id
        vehicle{
          name
        }
      }
    }
    offline: vehiclesOfflines(condition:{id:$id}){
      nodes{
        id
        deviceId
        name
      }
    }
  }
  `
  
  export {vehicleStatus as default}