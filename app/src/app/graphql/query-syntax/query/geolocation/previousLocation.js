import { gql } from 'apollo-angular';

const previousLocation = gql`
query Geolocation {
    starfires(first:1 orderBy:ID_DESC condition:{vehicleId:"3666"}){
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