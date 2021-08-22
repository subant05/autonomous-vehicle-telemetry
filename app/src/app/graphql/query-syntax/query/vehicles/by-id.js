import { gql } from 'apollo-angular';

const vehicle = gql`
    query Vehicles($id:BigInt){
        vehicles(condition:{id:$id}){
            nodes{
                id
                name
                type {
                    type
                }
            }
        }
    }
`
export {vehicle as default}