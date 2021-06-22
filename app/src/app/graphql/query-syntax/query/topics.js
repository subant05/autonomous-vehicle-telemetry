import { gql } from 'apollo-angular';

const topics = gql`
query Topics{
  topics {
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