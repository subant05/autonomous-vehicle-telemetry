import { gql } from 'apollo-angular';

const previewImagesByVehicleIdTopicId  =gql`
subscription SQLCameraSubscriptionByVehilceIdTopicId($vehicleId:BigInt $topicId:BigInt) {
    sqlCamera {
      camera(vehicleId: $vehicleId) {
        vehicle {
          vehicleTopics(condition:{topicId:$topicId}) {
            nodes {
              topic{
                name
                id
                cameras(first:1 orderBy:ID_DESC){
                  nodes{
                    readingat
                    msg {
                      header{
                        headerId
                        readingat
                      }
                      image{
                        width
                        height
                        encoding
                        isBigendian
                        step
                        data{
                          data
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

export {previewImagesByVehicleIdTopicId as default}