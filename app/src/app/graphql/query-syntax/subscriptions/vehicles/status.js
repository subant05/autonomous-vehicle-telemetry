import { gql } from 'apollo-angular';

const vehicleStatus = gql`
subscription sqlVehicleStatus($vehicleId:BigInt) {
    sqlVehicleStatus{
      event
      vehicle_status(vehicleId:$vehicleId){
        id
        createdAt
        readingat
        statusMessage{
          header{
            headerid
            readingat
            node
          }
          missionStats{
            missionStartTime
            durationAutonomyStopped 
            durationAutonomyDriving
            durationNoAutonomy
            durationTeleop
            autonomyDistanceTravelledM 
            autonomyAreaTravelledSqm
            numStops
            numStateDemotion
            numTruePositives
            numFalsePositives
            numTeleopQueries
          }
        }
        state{
          name
        }
        id
        topic{
          name
        }
         vehicleStatusDetails{
           nodes{
             id
             isActive
             isRecoverable
             description
             vehicleStatusReasonId
             reason: vehicleStatusReason{
                name
                code
            }
           }
         }
        alerts{
           totalCount
           pageInfo{
             startCursor
             endCursor
             hasNextPage
             hasPreviousPage
           }
          nodes{
          id
          message
          read
          dismissed
          alertType{
              name
              severity
            }
            }
        }
      }
    }
  }
`
  
  export {vehicleStatus as default}