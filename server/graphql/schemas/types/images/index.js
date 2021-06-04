import { gql } from 'apollo-server-express';
import ImagePair from './image-pair'
import SegmentationMap from './segmentation-map'

export default gql`
   ${ImagePair}
   ${SegmentationMap}
`;