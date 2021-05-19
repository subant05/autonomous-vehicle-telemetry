import { gql } from 'apollo-server-express';

export default gql`
   type DeviceMessage {
      timestamp: Float
      topic: String
      msg:DeviceMessageData
      type:DeviceMessageType
   }

   type DeviceMessageHeader {
      id: Float
      timestamp:Float
      seq:Float
      node: String
   }

   type DeviceMessageData {
      header: DeviceMessageHeader
      id:Float
      is_rtr:Boolean
      is_extended:Boolean
      is_error:Boolean
      dlc:Float
      data:[Float]
      sf_to_tractor_front_m:Float
      implement_width_m:Float
      on_path_buffer_m:Float
      starfire_xy_m:DeviceMessageStartfireXYData
      starfire_heading_deg:Float
      path_rectangle_states:[Float]
   }

   type DeviceMessageType {
      module:String
      class:String
   }

   type DeviceMessageStartfireXYData {
      x:Float
      y:Float
   }
`;