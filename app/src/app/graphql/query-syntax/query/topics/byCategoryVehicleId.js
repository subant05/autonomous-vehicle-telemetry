import { gql } from 'apollo-angular';

const topics =gql`
query TopicsCategoryPreviewImages ($vehicleId: BigInt $category: String $topicName:String){
    topicCategories(condition:{name:$category}){
      nodes{
        topics(filter:{name:{like:$topicName}}){
          totalCount
          pageInfo{
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
          nodes{
            vehicleTopics(condition:{vehicleId:$vehicleId}){
              nodes{
                topic{
                  name
                  id
                }
              }
            }
          }  
        }
      }
    }
  }
`
export {topics as default}