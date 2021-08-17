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
`;

export {previewByMessageHeaderId as default}