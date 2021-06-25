import { gql } from 'apollo-angular';

const topicByVehicleId = gql`
query VehicleTopics($id:BigInt!){
    vehicle(id:$id){
        vehicleTopics{
            nodes{
                topic{
                    name
                }
            }
      }
    }
  }
  `

  export {topicByVehicleId as default}