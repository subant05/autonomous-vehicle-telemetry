import { gql } from 'apollo-angular';

const currentLogsByVehicleId = gql`
query Logging ($cursor:Int $vehicleId:BigInt $paginationRange:Int $nodes:[String!]){ 
    logging: vehicleLogMessages(
        first: $paginationRange
        orderBy:ID_DESC 
        offset: $cursor
        filter:{
            name:{
                in:$nodes
            }
        }
    ){
        nodes{
        vehicleLogsByMessageId(
            filter:{
            vehicleId:{equalTo:$vehicleId} 
            }
        ){
            nodes{
                readingat
                id
                topicId
                vehicleId
                    message{
                        id
                        name
                        function
                        file
                        level
                        msg
                        stamp{
                            sec
                            nanosec
                        }
                    }
                }
            }   
        }
    }
}
`

export {currentLogsByVehicleId as default}