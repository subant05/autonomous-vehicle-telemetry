import { gql } from 'apollo-angular';

const previewImagesByVehicleId = gql`subscription PreviewImagesByVehicleId($id: BigInt)  {
  sqlCamera {
    event
    id
    camera(vehicleId:$id){
        id
        nodeId
        topic{
          name
          id
        }
        vehicleId
        msg {
          id
          nodeId
          header{
            id
            seq
            readingat
            node
            headerId
          }
          image{
            id
            nodeId
            width
            height
            step
            isBigendian
            encoding
        }
      }
    }
  }
}`
export {previewImagesByVehicleId as default}