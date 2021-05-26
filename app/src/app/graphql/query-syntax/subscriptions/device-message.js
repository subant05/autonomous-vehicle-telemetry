import { gql } from 'apollo-angular';

const deviceMessage  = gql`
subscription deviceMessage {
  deviceMessage{
    timestamp
    topic 
    msg{
      header{
        id
        timestamp
      	seq
        node
      }
      id
      data
    }
    type{
      module
      class
    }
  }
}
`

export {deviceMessage as default}