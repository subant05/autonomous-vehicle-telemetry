import { gql } from 'apollo-angular';

const missionSubscription  = gql`
subscription MissionSubscription($vehicleId: BigInt){
    sqlMission {
      event
      missions(vehicleId: $vehicleId) {
        autonomyAreaTravelledSqm
        autonomyDistanceTravelledM
        durationAutonomyDriving
        durationAutonomyStopped
        durationNoAutonomy
        durationTeleop
        missionStartTime
        numFalsePositives
        numStateDemotion
        numStops
        numTeleopQueries
        numTruePositives
        id
      }
    }
  }
`

export {missionSubscription as default}