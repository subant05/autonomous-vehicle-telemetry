import { gql } from 'apollo-angular';

const topics = gql`
query {
    topics{
      name
      type {
        module
        class
      }
    }
  }
`

export {topics as default}