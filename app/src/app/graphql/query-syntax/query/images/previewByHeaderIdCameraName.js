import { gql } from 'apollo-angular';

const previewByMessageHeaderIdCameraName = gql`
query Images($cameraName: String, $headerId: BigInt) {
    imagesViews(
      filter:{
        cameraName:{equalTo:$cameraName}
        , headerId:{equalTo:$headerId}
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

export { previewByMessageHeaderIdCameraName as default}