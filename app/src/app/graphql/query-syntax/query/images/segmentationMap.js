import { gql } from 'apollo-angular';

const segmentationMapQuery = gql` 
query SegmentationMap($topic:String! $cursor:Int! $id:Float!){
    segmentationMap (topic:$topic, cursor:$cursor, id:$id){
        timestamp
        topic
        pagination{
          position
          pageSize
          length
        }
        msg {
          descriptor {
            id
            timestamp
          }
          image {
            id
            header{
              stamp {
                sec
                nanosec
              }
              frame_id
            }
            height
            width
            encoding
            is_bigendian
            step
          }
        }
      }
  }
  `

export {segmentationMapQuery as default}