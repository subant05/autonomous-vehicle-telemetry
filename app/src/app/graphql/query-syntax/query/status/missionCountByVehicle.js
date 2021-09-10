import { gql } from 'apollo-angular';

const missionCountByVehicleId = gql`query Missions($vehicleId: BigInt){
    missionPaginationViews(condition:{vehicleId:$vehicleId}){
      totalCount
      nodes{
        missionStartTime
        missionReadingCount
      }
    }
  }`

  export {missionCountByVehicleId as default}