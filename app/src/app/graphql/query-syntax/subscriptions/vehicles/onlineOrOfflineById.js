import { gql } from 'apollo-angular';

const vehicleStatus = gql`
subscription sqlVehiclesOnlineByVehicle ($id:BigInt){  
    sqlVehiclesOnline {
      event
      row{
        id
      }
      vehicle_online(vehicleId:$id ){
        nodeId
        vehicleId
        vehicle{
          name
          type {
            id
          }
        }
      }
    }
  }`
  
  export {vehicleStatus as default}