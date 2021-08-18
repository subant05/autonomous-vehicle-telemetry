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
        centroidLocation{
          xyzCamera{
            xM
            yM
            zM
          }
          xyzStarfire{
            xM
            yM
            zM
          }
          lla{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          enu{
            eastM
            northM
            upM
          }
          fieldOrigin{
            latitudeDeg
            longitudeDeg
            altitudeM
          }
          ecef{
            xM
            yM
            zM
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