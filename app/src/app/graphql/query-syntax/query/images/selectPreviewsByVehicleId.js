import { gql } from 'apollo-angular';

// "/side_right/left/preview"
// , "/side_left/left/preview"
// , "/front_right/left/preview"
// , "/front_left/left/preview"
// , "/front_center/left/preview"
// , "/rear/left/preview"

const selectPreviewByVehicleId =gql`
query MainPreviewImages($vehicleId: BigInt $topicNames:[String!]) {
    topics(
      filter:{name:{in:$topicNames}}){
      nodes{
        vehicleTopics(last: 1){
            nodes{
              topic{
                name
                id
              }
            }
        }
        cameras(orderBy: ID_DESC first:1 condition:{vehicleId:$vehicleId}){
          nodes{
            topic{
              name
              id
            }
            msg{
              header{
                headerId
              }
              image{
                id
                nodeId
                width
                height
                step
                isBigendian
                encoding
              }
            }
          }
        }
      }
    }
  }
  `

  export {selectPreviewByVehicleId as default}