import { gql } from 'apollo-angular';

const previewByVehicleId = gql`
query PreviewByVehicleId ($vehicleId:BigInt) {
	cameras(last:1 condition:{vehicleId:$vehicleId}){
    nodes{
      vehicle{
        id
        name
      }
      msg {
        header{
          headerId
        }
        image {
          isBigendian
          segmentationMaps {
            edges {
              node {
                id
              }
            }
          }
          encoding
          height
          width
          data{
            data
          }
        }
      }
    }
  }
}
`

export {previewByVehicleId as default}