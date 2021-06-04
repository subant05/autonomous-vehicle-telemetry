import { gql } from 'apollo-server-express';

export default gql`
    type Image{
        header: DeviceMessageHeader!
        height: Int!
        width: Int!
        encoding: String!
        is_bigendian: Int
        step: Int!
        data: [Int]
    }

    type SideIntrinsics{
        height:Int!
        width:Int!
        k:[Float]
        d:[Float]
    }

    type StereoIntrinsics {
        t:[Float!]
        r:[Float!]
        r_rodrigues:[Float!]
    }

    type CameraROI{
        x_offset: Float
        y_offset: Float
        height: Int
        width: Int
        do_rectify: Boolean
    }

    type CameraHistogram {
        full_histogram: [Int!]
		small_histogram: [Int!]
    }

    type CameraMeta {
        serial_number: String!
        camera_name:String
        left_intrinsics:SideIntrinsics!
        right_intrinsics:SideIntrinsics!
        stereo_extrinsics:StereoIntrinsics!
        tractor_extrinsics:StereoIntrinsics!
        e:[Float!]
        f:[Float!]
        r1:[Float!]
        r2:[Float!]
        p1:[Float!]
        p2:[Float!]
        q:[Float!]
        left_roi:CameraROI
        right_roi:CameraROI
        left_exposure: Float!
        right_exposure: Float!
        left_gain: Float!
        right_gain: Float!
        extra:String
        left_histogram:CameraHistogram
        right_histogram:CameraHistogram

    }

    type CameraPairMessage {
        header:DeviceMessageHeader
        left_image:Image!
        right_image: Image!
        camera_meta: CameraMeta!
    }

    type CameraPair {
        timestamp: Float!
        topic:String!
        msg:CameraPairMessage!
        type: DeviceMessageType
    }

`