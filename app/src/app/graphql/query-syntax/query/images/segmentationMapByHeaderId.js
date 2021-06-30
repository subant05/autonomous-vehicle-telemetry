import { gql } from 'apollo-angular';

const segmentationMapByHeaderId = gql`
query Segmentation($imageHeaderId: BigInt) {
  cameraMessageHeaders(filter:{headerId:{equalTo:$imageHeaderId}}){
    nodes{
      cameraMessagesByHeaderId{
        nodes{
          id
          image{
						encoding
            width
            height
            step
            isBigendian
             data{
               data
             }
          }
        }
      }
    }
  }
}`

  export {segmentationMapByHeaderId as default}