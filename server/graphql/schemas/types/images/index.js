import { gql } from 'apollo-server-express';
import ImagePair from './image-pair'
import SegmentationMap from './segmentation-map'
import Pagination from './pagination'

export default gql`
   ${ImagePair}
   ${Pagination}
   ${SegmentationMap}
`;