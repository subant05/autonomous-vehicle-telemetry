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
          id
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
        }
      }
    }
  }
}
`

export {previewByVehicleId as default}