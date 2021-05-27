import { gql } from 'apollo-angular';

const geolocation = gql`
query {
    geolocation{
      msg {
        longitude
        latitude
      }
    }
  }
`

export {geolocation as default}