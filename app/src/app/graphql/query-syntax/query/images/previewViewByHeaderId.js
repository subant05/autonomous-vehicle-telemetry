import { gql } from 'apollo-angular';

const previewViewByMessageHeaderId = gql`
query Images($headerId: BigInt $size:Int $cursor:Int $encoding:String) {
    imagesViews(
      first:$size
      offset:$cursor
      orderBy:ID_DESC
      filter:{
        headerId:{equalTo:$headerId}
        , encoding:{equalTo:$encoding}
      }
    ) {
      nodes{
        id
        width
        height
        isBigendian
        step
        encoding
        readingat
        vehicleId
        topicId
        node
        cameraName
        headerId
        topicName
      }
    }
  }
`

export { previewViewByMessageHeaderId as default}