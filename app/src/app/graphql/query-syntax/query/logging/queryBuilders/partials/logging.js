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
logging: vehicleLogViews(
  first: ${paginationRange}, 
  orderBy: READINGAT_DESC, 
  offset: $cursor
  condition:{vehicleId:$vehicleId}
  filter:{
    node:{
      in:${JSON.stringify(nodes)}
    }
    readingat:{ 
            greaterThanOrEqualTo: $startDateTime
          , lessThanOrEqualTo: $endDateTime
    } 
  }
){
  nodes{
    id
    readingat
    topicId
    vehicleId
    name: node
    function
    file
    level
    msg
    sec
    nanosec
  }
}
`