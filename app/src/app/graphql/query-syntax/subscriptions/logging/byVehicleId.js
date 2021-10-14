import { gql } from 'apollo-angular';

const loggingByVehicleId  = gql`
subscription LoggingSubscription ($vehicleId: BigInt) {
    sqlVehicleLogging {
        vehicle_logs(vehicleId:$vehicleId) {
            id
            readingat
            vehicleId
            name: node
            function
            file
            level
            msg
        }
    }
}
`

export {loggingByVehicleId as default}