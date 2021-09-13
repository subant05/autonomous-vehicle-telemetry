import { gql } from 'apollo-angular';

const missionCountByVehicleId = gql`query Missions($vehicleId: BigInt){
    missionPaginationViews(
      condition:{vehicleId:$vehicleId}
      filter:{missionStartTime:{
        greaterThan:"1970-01-01 00:00:00-05"
    }}
      ){
      totalCount
      nodes{
        missionStartTime
        missionReadingCount
      }
    }
  }`

  export {missionCountByVehicleId as default}