import { gql } from 'apollo-angular';

const objectHeaderIdByVehicleId  = gql`
query ObjectDetectionQuery ($vehicleId: BigInt $cursor:Int $size:Int){
    objects(
          first: $size
          offset: $cursor
          orderBy:ID_DESC 
          condition:{vehicleId:$vehicleId}
          ){
            totalCount
            pageInfo{
              startCursor
              hasNextPage
              hasPreviousPage
            }
            nodes{
                readingat
                id
                topicId
                topic{
                  name
                }
                  vehicleId
                  message{
                  header{
                    headerid
                    readingat
                    seq
                    node
                  }
              }      
            }
        }
  }
  `

  export { objectHeaderIdByVehicleId as default }