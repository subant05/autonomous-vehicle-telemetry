import { gql } from 'apollo-angular';

const previousLocation = gql`
query Geolocation ($vehicle_id: BigInt) {
    starfires(first:1 orderBy:ID_DESC condition:{vehicleId:$vehicle_id}){
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
export {previousLocation as default}