import { gql } from 'apollo-angular';

// const previewImagesByVehicleId  = gql`
// subscription PreviewImagesByVehicleId($id: BigInt) {
//     topicCategories(condition:{name:"images"}){
//       nodes{
//         topics(filter:{name:{includes:"left/preview"} }){
//           nodes{
//             cameras(last:1 condition:{vehicleId:$id}){
//               totalCount
//               nodes {
//                 id
//                 topic{
//                   name
//                 }
//                 msg{
//                   image {
//                     cameraMessages{
//                       nodes{
//                         header{
//                           readingat
//                           headerId
//                         }
  
//                         image{
//                           width
//                           height
//                           step
//                           isBigendian
//                           encoding
//                           data {
//                             data
//                           }
//                         }
//                       }
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

const previewImagesByVehicleId = gql`subscription PreviewImagesByVehicleId($id: BigInt)  {
  sqlCamera {
    event
    id
    camera(vehicleId:$id){
        id
        nodeId
        topic{
          name
          id
        }
        msg {
          id
          nodeId
          header{
            id
            seq
            readingat
            node
          }
          image{
            id
            nodeId
            width
            height
            step
            isBigendian
            encoding
            data {
              id
              nodeId
              data
            }
        }
      }
    }
  }
}`
export {previewImagesByVehicleId as default}