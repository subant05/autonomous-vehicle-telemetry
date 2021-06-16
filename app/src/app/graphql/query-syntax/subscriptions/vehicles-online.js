import { gql } from 'apollo-angular';

const onlineDevices  = gql`
subscription onlineDevices {
  onlineDevices{
   id
   name
   type
  }
}
`

export {onlineDevices as default}