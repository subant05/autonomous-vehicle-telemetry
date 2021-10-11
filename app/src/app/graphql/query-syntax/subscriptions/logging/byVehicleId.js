import { gql } from 'apollo-angular';

const loggingByVehicleId  = gql`
subscription LoggingSubscription ($vehicleId: BigInt) {
    sqlVehicleLogging {
        vehicle_logs(vehicleId:$vehicleId) {
            id
            readingat
            topicId
            vehicleId
            name: node
            function
            file
            level
            msg
            sec
            nanosec
            sec
            nanosec
            deviceId
            node
            vehicleName
        }
    }
}
`

export {loggingByVehicleId as default}