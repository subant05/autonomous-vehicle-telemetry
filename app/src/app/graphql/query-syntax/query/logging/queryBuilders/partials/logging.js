export const logging = (paginationRange=25)=> `logging: vehicleLogs(
    first: ${paginationRange}
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
}`