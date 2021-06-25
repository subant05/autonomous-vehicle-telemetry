import { gql } from 'apollo-angular';

const vehicleGeographicCoordinates = gql`
subscription VehicleGeographicCoordinates($vehicleId:Float) {
  sqlStarfire{
    starfire(vehicleId:$vehicleId){
      msg{
        longitude
        latitude
      }
      vehicle{
        name
        ip
      }
    }
  }
}
`

  export {vehicleGeographicCoordinates as default}