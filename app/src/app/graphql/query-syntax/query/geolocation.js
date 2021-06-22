import { gql } from 'apollo-angular';

const geolocation = gql`
query Geolocation ($vehicleId:BigInt){
  starfires(condition:{vehicleId:$vehicleId}){
    nodes{
      vehicle{
        name
        id
        type{
          type
        }
      }
       
      msg{
        latitude
        longitude
      }
    }
  }
}
`

export {geolocation as default}