import { gql } from 'apollo-angular';

const byVehicleIdDateTimestamp = gql`
query GeolocationByVehicleIdDateTimestamp ($vehicleId:BigInt, $startDateTime:Datetime, $endDateTime:Datetime){
	starfires(filter:{vehicleId:{equalTo:$vehicleId}
    , readingat:{ greaterThanOrEqualTo:$startDateTime
      , lessThanOrEqualTo:$endDateTime} 
  }){
    nodes{
      readingat
      id
      msg {
        latitude
        longitude
    		altitude
        yawRate
        speed
        isGpsLocked
      	header{
          headerId
          readingat
        }
      }
    }
  }
}
`

export {byVehicleIdDateTimestamp as default}