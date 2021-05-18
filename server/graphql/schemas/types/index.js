import { gql } from 'apollo-server-express';
import DeviceMessage from './device-message'

export default gql`
   ${DeviceMessage}
`;