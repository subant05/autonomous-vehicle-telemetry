import { gql } from 'apollo-server-express';

export default  gql`
    type Starfire  {
        timestamp: Float!,
        topic: String!,
        msg: StarfireMessage!,
        type: DeviceMessageType
  }

  type StarfireMessage {
      header: DeviceMessageHeader
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
`;
