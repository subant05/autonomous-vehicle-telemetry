import { gql } from 'apollo-angular';

const objectByVehicleId  = gql`
subscription ObjectDetectionSubscription ($vehicleId: BigInt) {
  sqlObjectDetection {
    object(vehicleId:$vehicleId) {
      readingat
      topic{
        name
      }
      message{
        cameraName
        isActivePathSet
        onPath
        circleRadiusM
        detection{
          header{
            readingat
            node
            seq
          }
          cuboid{
            dimension{
              widthM
              depthM
              heightM
            }
          }
        }
        header{
          headerid
          seq
          node
          readingat
        }
      }
    }
  }
}
`

export {objectByVehicleId as default}