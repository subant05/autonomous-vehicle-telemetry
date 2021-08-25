import { gql } from 'apollo-angular';

const segmentationMapByHeaderId = gql`
query Segmentation($imageHeaderId: BigInt) {
  cameraMessageHeaders(filter:{headerId:{equalTo:$imageHeaderId}}){
    nodes{
      cameraMessagesByHeaderId{
        nodes{
          image{
            width
            height
          }
          segmentationMapsByMsgId{
            nodes{
              msg{
                image{
                    id
                    encoding
                    width
                    height
                    step
                    isBigendian
                }
              }
            }
          }
        }
      }
    }
  }
}`

  export {segmentationMapByHeaderId as default}