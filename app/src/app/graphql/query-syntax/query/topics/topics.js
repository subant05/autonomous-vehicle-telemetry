import { gql } from 'apollo-angular';

const topics = gql`
query Topics{
  topics (filter:{name:{notLike:"%segmentation%"}}) {
    nodes{
      id
      name
      type{
        class
        module
      }
    }
  }
}
`

export {topics as default}