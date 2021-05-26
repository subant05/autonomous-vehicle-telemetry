import { gql } from 'apollo-angular';

const geographicCoordinates = gql`subscription geographicCoordinates {
    geographicCoordinates{
      longitude
      latitude
    }
  }`

  export {geographicCoordinates as default}