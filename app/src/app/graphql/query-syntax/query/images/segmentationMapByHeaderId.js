import { gql } from 'apollo-angular';

// const segmentationMapByHeaderId = gql`
// query Segmentation($imageHeaderId: BigInt) {
//   cameraMessageHeaders(filter:{headerId:{equalTo:$imageHeaderId}}){
//     nodes{
//       cameraMessagesByHeaderId{
//         nodes{
//           image{
//             width
//             height
//           }
//           segmentationMapsByMsgId{
//             nodes{
//               msg{
//                 image{
//                     id
//                     encoding
//                     width
//                     height
//                     step
//                     isBigendian
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// }`

const segmentationMapByHeaderId = gql`query Segmentation($imageHeaderId: BigInt) {
  segmentationViews(condition:{headerId:$imageHeaderId}){
    nodes{
      imageId
      id
      width
      height
      encoding
      step
      isBigendian
      headerId
      readingat
    }
  }
}`

  export {segmentationMapByHeaderId as default}