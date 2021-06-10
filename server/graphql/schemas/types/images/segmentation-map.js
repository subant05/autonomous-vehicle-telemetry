import { gql } from 'apollo-server-express';

export default gql`
    type SegmentationImageHeaderStamp{
        sec:Int!
        nanosec:Int!
    }

    type SegmentationImageHeader {
        stamp:SegmentationImageHeaderStamp!
        frame_id:String!
    }

    type SegmentationImage {
        header:SegmentationImageHeader
        height:Int!
        width:Int!
        encoding:String!
        is_bigendian:Int!
        step:Int!
        data:[Int!]
    }

    type SegmentationMapMessage {
        descriptor:DeviceMessageHeader
        image:SegmentationImage
        camera_meta:CameraMeta
    }

    type SegmentationMap {
        timestamp: Float!
        topic:String!
        msg:SegmentationMapMessage
        type:DeviceMessageType
        pagination:Pagination
    }
`