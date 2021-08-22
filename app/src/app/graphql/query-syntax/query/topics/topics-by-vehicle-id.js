import { gql } from 'apollo-angular';

const topicByVehicleId = gql`
query VehicleTopics($id:BigInt!){
    topics (filter:{name:{notLike:"%segmentation%"}}) {
          nodes{
          vehicleTopics(filter:{vehicleId:{equalTo:$id}}){
            nodes{
              vehicle{
                name
                ip
                id
                type{
                  type
                }
              }
              topic{
                name
                id
              }
            }
          }
        }
      }
    }
  `

  export {topicByVehicleId as default}