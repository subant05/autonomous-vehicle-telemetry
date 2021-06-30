import { gql } from 'apollo-angular';

const previewByVehicleIdTopicName = gql`
query PreviewByVehicleIdTopicName($vehicleId: BigInt, $topicName:String, $cursor:Int){
    topics(filter: {
      name: {
          equalTo: $topicName 
      }
    }){
      nodes{
        cameras(
            first:1
            offset: $cursor 
            orderBy: ID_DESC 
            condition: {
                vehicleId: $vehicleId
            }
        ){
          totalCount       
              nodes{
              id
              readingat
              vehicle{
                name
              }
              
              msg{
                header{
                  headerId
                }
                image{
                  isBigendian
                  encoding
                  height
                  width
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
  `
export {previewByVehicleIdTopicName as default}