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
      starfire_xy_m:StarfireXY
      starfire_heading_deg:Float
      path_rectangle_states:[Float]
      pgn_address: Int,
      serial_number: Float,
      type: String,
      latitude: Float,
      longitude: Float
      altitude: Float,
      bearing: Int,
      speed: Float,
      pitch: Float
      roll: Int,
      yaw_rate: Int,
      correction_mode: Int,
      snr_db: Int,
      is_gps_locked: Boolean
   }

   type DeviceMessageType {
      module:String
      class:String
   }

   type StarfireXY {
      x:Float
      y:Float
   }

   type GeographicCoordinates {
      longitude:Float
      latitude:Float
   }
`;