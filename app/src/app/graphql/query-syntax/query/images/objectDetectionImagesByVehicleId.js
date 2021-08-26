import { gql } from 'apollo-angular';

const objectDetectionImages = gql`
query ObjectDetectionImages ($vehicleId: BigInt, $cursor:Int, $size:Int, $startDateTime:Datetime, $endDateTime:Datetime){
    objectDetectionImages(
        first: $size
        offset: $cursor
        orderBy: OBJECT_ID_DESC 
        condition:{vehicleId:$vehicleId}
        filter:{
            readingat:{
              greaterThanOrEqualTo: $startDateTime
              , lessThanOrEqualTo: $endDateTime
            }
        }
    ){
        totalCount
        pageInfo{
          hasNextPage
          hasPreviousPage
          startCursor
        }
        nodes{
          vehicleId
          imageId
          width
          height
          headerId
          objectId
          readingat
          encoding
          cameraName
          leftExposure
          rightExposure
          leftGain
          rightGain
        }
      }
  }
`

export {objectDetectionImages as default} 