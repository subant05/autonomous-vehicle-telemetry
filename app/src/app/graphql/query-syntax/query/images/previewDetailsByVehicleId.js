import { gql } from 'apollo-angular';

const PreviewDetailsByVehicleId  = gql`
query PreviewImagesByVehicleId($id: BigInt) {
    topicCategories(condition:{name:"images"}){
      nodes{
        topics(filter:{name:{includes:"left/preview"} }){
          nodes{
            cameras(last:1 condition:{vehicleId:$id}){
              totalCount
              nodes {
                id
                topic{
                  name
                  id
                }
                msg{
                  image {
                    cameraMessages{
                      nodes{
                        header{
                          readingat
                          headerId
                        }
  
                        image{
                          id
                          width
                          height
                          step
                          isBigendian
                          encoding
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
export {PreviewDetailsByVehicleId as default}