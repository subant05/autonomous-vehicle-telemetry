import { gql } from 'apollo-angular';

const previewByVehicleIdTopicName = gql`
query PreviewByVehicleIdTopicName($vehicleId: BigInt, $topicName:String, $cursor:Int, $size:Int){
    topics(filter: {
      name: {
          equalTo: $topicName 
      }
    }){
      nodes{
        cameras(
            first:$size
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
                cameraMeta{
                  cameraName
                  leftExposure
                  rightExposure
                  leftGain
                  rightGain
                  leftRoi{
                    xOffset
                    yOffset
                  }
                  rightRoi{
                    xOffset
                    yOffset
                  }
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