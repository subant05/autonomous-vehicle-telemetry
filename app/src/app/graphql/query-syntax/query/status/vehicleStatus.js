import { gql } from 'apollo-angular';

const vehicleStatus = gql`
query VehicleStatus($vehicle_id:BigInt, $cursor:Int, $size:Int) {
    vehicleStatuses( first:$size offset:$cursor orderBy:ID_DESC condition:{vehicleId:$vehicle_id}){
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

export {vehicleStatus as default}