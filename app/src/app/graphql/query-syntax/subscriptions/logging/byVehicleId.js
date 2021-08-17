import { gql } from 'apollo-angular';

const loggingByVehicleId  = gql`
subscription LoggingSubscription ($vehicleId: BigInt) {
    sqlVehicleLogging {
        vehicle_logs(vehicleId:$vehicleId) {
            readingat
            message{
            stamp{
                sec
                nanosec
            }
            msg
            line
            file
            level
            name
            function
            }
        }
    }
}
`

export {loggingByVehicleId as default}