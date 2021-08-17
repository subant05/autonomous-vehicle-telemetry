export const vehicleStatus = (paginationRange=25)=> `vehicleStatus: vehicleStatuses(
    first: ${paginationRange}
    orderBy:ID_DESC 
    offset: $cursor
    filter:{
      vehicleId:{equalTo:$vehicleId}
      , readingat:{ 
          greaterThanOrEqualTo: $startDateTime
        , lessThanOrEqualTo: $endDateTime
      } 
    }){    
    nodes{
      readingat
      id
      topicId
      topic{
        name
      }
      vehicleId
      alerts{
        nodes{
          id
          message
          dismissed
          read
          alertType{
            id
            name
            severity
            
          }
        }
      }
      state{
        name
        description
        id
      }
      vehicleStatusDetails{
        nodes{
          isActive
          isRecoverable
          description
          reason: vehicleStatusReason{
            code
            id
            name
          }
        }
      }
      message: statusMessage{
        id
        header{
          id
          seq
          headerid
          readingat
          node
        }
      }
    }
  }`