import { gql } from 'apollo-angular';

const missionsQuery = gql` 
    query Missions($vehicleId: BigInt, $cursor: Int,  $size: Int){
        missions(
            orderBy: ID_DESC
            offset: $cursor
            first: $size
            condition: {vehicleId: $vehicleId}
            filter:{missionStartTime:{greaterThan:"1970-01-01"}}
        ) {
        totalCount
        pageInfo{
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        nodes{
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

export {missionsQuery as default}