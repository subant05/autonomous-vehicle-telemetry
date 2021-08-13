import { gql } from 'apollo-angular';

const allLoggingStatusObjectDetection = gql`
query Logging ($cursor:Int $vehicleId:BigInt $startDateTime:Datetime $endDateTime:Datetime){
  logging: vehicleLogs(
    	first: 10
    	orderBy:ID_DESC 
    	offset: $cursor
      filter:{
        vehicleId:{equalTo:$vehicleId}
        , readingat:{ 
            greaterThanOrEqualTo: $startDateTime
          , lessThanOrEqualTo: $endDateTime
        } 
      }){
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      topic{
        id
        name
      }
      message {
        id
        name
        function
        file
        msg
        line
        level
        stamp {
          sec
          nanosec
        }
      }
    }
  }
  objectDetection: objects(
    first: 10
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){
    	nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      message{
        header{
          headerid
          readingat
          seq
          node
        }
        detection{
          header{
            headerid
            readingat
            seq
            node
          }
        	cuboid {
            centroid{
              xM
              yM
              zM
            }
            dimension{
              widthM
              depthM
              heightM
            }
            orientation{
              rollDeg
              pitchDeg
              yawDeg
            }
          }
          roi{
            x
            y
            width
            height
            thetaDeg
          }
          label
          confidence
        }
        centroidRpy{
          rollDeg
          pitchDeg
          yawDeg
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
        objectMessageVertices{
          nodes{
            xyzCamera{
              xM
              yM
              zM
            }
          }
        }
      }      
    }
  }
  vehicleStatus: vehicleStatuses(
    first: 10
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){    
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      alerts{
        nodes{
          id
          message
          dismissed
          read
          alertType{
            id
            name
            severity
            
          }
        }
      }
      state{
        name
        description
        id
      }
      vehicleStatusDetails{
        nodes{
          isActive
          isRecoverable
          description
          reason: vehicleStatusReason{
            code
            id
            name
          }
        }
      }
      message: statusMessage{
        id
        header{
          id
          seq
          headerid
          readingat
          node
        }
      }
    }
  }
}
`

export {allLoggingStatusObjectDetection as default}