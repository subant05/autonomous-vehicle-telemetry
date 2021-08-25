import { gql } from 'apollo-angular';

const previewByVehicleIdTopicId = gql`
query PreviewByVehicleId ($vehicleId:BigInt, $topicId: BigInt, $cursor:Int) {
    cameras(
        first:1
        offset:$cursor
        orderBy:ID_DESC 
        condition:{
            vehicleId:$vehicleId
            topicId:$topicId
        }
        ){

        pageInfo{
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
        totalCount
        edges{
        cursor
        }
        nodes{
        vehicle{
            id
            name
        }
        readingat
        topic{
            name
            type {
            module
            class
            }
        }
        msg {
            header {
                headerId
            }
            image {
                id
                isBigendian
                encoding
                height
                width
                step
            }
        }
    }
    }
}
`

export {previewByVehicleIdTopicId as default}