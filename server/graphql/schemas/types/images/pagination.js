import { gql } from 'apollo-server-express';

export default gql`
    type Pagination {
        length:Int!
        position:Int!
        pageSize:Int!
    }
`