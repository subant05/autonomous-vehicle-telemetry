import { gql } from 'apollo-angular';

const vehicles = gql`
query {
    vehicles{
      nodes{
        id
        name
        type {
          type
        }
      }
    }
  }
`

export {vehicles as default}