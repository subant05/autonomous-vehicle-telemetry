import { gql } from 'apollo-angular';

const missionStatsByVehicleIdTimestamp = gql`query MissionStats($vehicleId: BigInt, $timestamp: Datetime) {
  missionStatsByTimestamps(
    first:1
    orderBy: ID_DESC
    filter:{missionStartTime:{
        lessThanOrEqualTo:$timestamp
      , greaterThan:"1970-01-01 00:00:00-05"
    }}
    condition: {vehicleId: $vehicleId}
  ) {
    totalCount
    pageInfo{
      startCursor
      hasNextPage
      hasPreviousPage
      endCursor
    }
    nodes {
      autonomyAreaTravelledSqm
      autonomyDistanceTravelledM
      durationAutonomyDriving
      durationAutonomyStopped
      durationNoAutonomy
      durationTeleop
      id
      missionStartTime
      numFalsePositives
      numStateDemotion
      numStops
      numTeleopQueries
      numTruePositives
      vehicleId
      vehicleName
    }
  }
}`

  export {missionStatsByVehicleIdTimestamp as default}