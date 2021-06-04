import { gql } from 'apollo-angular';

const imagePairQuery = gql` 
query ImagePair($topic:String! $cursor:Int!){
        imagePair(topic:$topic cursor:$cursor){
            timestamp
            topic
            msg{
              header{
                  id
                  timestamp
                  seq
                  node
              }
              left_image{
                height
                width
                encoding
                step
                is_bigendian
                data
              }
              right_image{
                height
                width
                encoding
                step
                is_bigendian
                data
              }
            }
          }
  }
  `

export {imagePairQuery as default}