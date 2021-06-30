import { gql } from 'apollo-angular';

const segmentationMapByHeaderId = gql`
query Segmentation($imageHeaderId: BigInt) {
    cameraMessageHeaders(condition:{
      headerId:$imageHeaderId
    }){
      nodes{
        cameraMessagesByHeaderId{
          totalCount
          nodes{
             camerasByMsgId{
                 nodes{
                   msg{
                     header{
                       headerId
                     }
                     image{
                       height
                       width
                       isBigendian
                       encoding
                        data {
                          data
                        }
                     }
                   }
                 }
              }
            segmentationMapsByMsgId{
              nodes{
                msg{
                    header{
                      headerId
                    }
                  image{
                    height
                    width
                    isBigendian
                    step
                    encoding
                    data{
                      data
                    }
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