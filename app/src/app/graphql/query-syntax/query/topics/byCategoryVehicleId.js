import { gql } from 'apollo-angular';

// const topics =gql`
// query TopicsCategoryPreviewImages ($vehicleId: BigInt $category: String $topicName:String){
//     topicCategories(condition:{name:$category}){
//       nodes{
//         topics(filter:{name:{like:$topicName}}){
//           totalCount
//           pageInfo{
//             hasNextPage
//             hasPreviousPage
//             endCursor
//             startCursor
//           }
//           nodes{
//             vehicleTopics(condition:{vehicleId:$vehicleId}){
//               nodes{
//                 topic{
//                   name
//                   id
//                 }
//               }
//             }
//           }  
//         }
//       }
//     }
//   }
// `

const topics =gql`

query TopicsCategoryPreviewImages ($vehicleId: BigInt $category: String $topicName:String, $topicList:[String!]){
  
  list :topics(filter:{name:{in:$topicList}}){
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
  category: topicCategories(condition:{name:$category}){
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