import { gql } from 'apollo-angular';

const previewByMessageHeaderId = gql`
query PreviewImage ($headerId: BigInt){
	cameraMessageHeaders(condition:{headerId:$headerId}) {
    nodes{
      node
      readingat
      seq
      cameraMessagesByHeaderId{
        nodes{
          camerasByMsgId{
						nodes{
              msg{
                header{
                  readingat
                  node
                  seq
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
                  data {
                    id
                    nodeId
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
}
`;

export {previewByMessageHeaderId as default}