import { gql } from 'apollo-angular';

const byVehicleIdDateRange = gql`
query VehicleStatus($vehicle_id:BigInt $startDateTime:Datetime $endDateTime:Datetime) {
    vehicleStatuses( 
        orderBy:READINGAT_DESC 
        condition:{vehicleId:$vehicle_id}
        filter:{
            readingat:{
              lessThanOrEqualTo:$endDateTime
              , greaterThanOrEqualTo:$startDateTime
            }
          }
    ){
       pageInfo{
         startCursor
         endCursor
         hasNextPage
         hasPreviousPage
         
       }
     totalCount
     edges {
       cursor
       node{
        id
        createdAt
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
         createdAt
         state{
           name
           description
           id
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
             read
             message
             dismissed
             alertType{
               id
               severity
               name
             }
           }
         }
       }
     }
     }
   }
`

export {byVehicleIdDateRange as default}