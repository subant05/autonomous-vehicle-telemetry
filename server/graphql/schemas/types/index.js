import { gql } from 'apollo-server-express';
import DeviceMessage from './device'
import Starfire from './starfire'
import Topic from './topic'
import Images from './images'

export default gql`
   ${DeviceMessage}
   ${Starfire}
   ${Topic}
   ${Images}
`;