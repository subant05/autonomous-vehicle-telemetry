import { gql } from 'apollo-angular';

const byVehicleIdDateRange = gql`
query Logging ($vehicleId:BigInt $startDateTime: Datetime $endDateTime: Datetime){ 
logging: vehicleLogViews(
    orderBy: READINGAT_DESC, 
    condition:{vehicleId:$vehicleId}
    filter:{
        readingat:{
          lessThanOrEqualTo:$endDateTime
          , greaterThanOrEqualTo:$startDateTime
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
}
`

export {byVehicleIdDateRange as default}