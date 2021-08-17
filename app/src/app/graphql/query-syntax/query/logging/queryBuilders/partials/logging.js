// export const logging = (paginationRange=25)=> `logging: vehicleLogs(
//     first: ${paginationRange}
//     orderBy:ID_DESC 
//     offset: $cursor
//   filter:{
//     vehicleId:{equalTo:$vehicleId}
//     , readingat:{ 
//         greaterThanOrEqualTo: $startDateTime
//       , lessThanOrEqualTo: $endDateTime
//     } 
//   }){
// nodes{
//   readingat
//   id
//   topicId
//   topic{
//     name
//   }
//   vehicleId
//   topic{
//     id
//     name
//   }
//   message {
//     id
//     name
//     function
//     file
//     msg
//     line
//     level
//     stamp {
//       sec
//       nanosec
//     }
//   }
// }
// }`

export const logging = (paginationRange=25, nodes=[])=>`
logging: vehicleLogMessages(
        first: ${paginationRange}
        orderBy:ID_DESC 
        offset: $cursor
        filter:{name:{in:${JSON.stringify(nodes)}}}
  ){

    nodes{
      vehicleLogsByMessageId(
        filter:{
          vehicleId:{equalTo:$vehicleId} 
          , readingat:{ 
              greaterThanOrEqualTo: $startDateTime
            , lessThanOrEqualTo: $endDateTime
          } 
        }
      ){
        nodes{
          readingat
          id
          topicId
          vehicleId
          message{
            id
            name
            function
            file
            level
            msg
            stamp{
              sec
              nanosec
            }
            
          }
        }
      }
    }
  }
`