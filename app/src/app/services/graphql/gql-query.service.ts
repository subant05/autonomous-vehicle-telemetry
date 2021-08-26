import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { rawListeners } from 'process';
import { v4 as uuid } from "uuid"
import { map } from 'rxjs/operators'
import {ImageService} from 'src/app/services/images/image.service'
import { resourceLimits } from 'worker_threads';
const QueryQL = require("src/app/graphql/query-syntax/query")

@Injectable({
  providedIn: 'root'
})
export class GqlQueryService {

  constructor( 
    private graphService: Apollo
    , private imageService:ImageService 
  ) { }

  private basicFilteredQuery (Query:any, variables:any={}) {
    return this.graphService
    .watchQuery<any>({ 
      query: Query, 
      variables
    })
    .valueChanges
  }

  getTopics(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Topics.All })
      .valueChanges
  }

  getTopicsByVehicleId(variables:any){
    return this.basicFilteredQuery(QueryQL.Topics.ByVehicleId, variables)
  }

  getGeolocaton(variables:any){
    // return this.graphService
    //   .watchQuery<any>({ query: QueryQL.Geolocation.ById,variables })
    //   .valueChanges

      return this.basicFilteredQuery(QueryQL.Geolocation.ById, variables)
      .pipe(map((response:any)=>{
        return response.data.starfires.nodes
      }))
  }

  getImagePair(variables:any){
    return this.basicFilteredQuery(QueryQL.Images.ImagePair, variables)
  }

  getSegmentationMap(variables:any){
    return this.basicFilteredQuery(QueryQL.Images.SegmentationMap, variables)
  }

  getAllVehicles(){
    return this.basicFilteredQuery(QueryQL.Vehicles.All)
      .pipe(map(response=>{
        return response.data.vehicles.nodes.map((vehicle:any)=>{
          return {...vehicle, type: vehicle.type.type}
        })
      }))
  }

  getOnlineVehicles({sort=""}={}){
    return this.basicFilteredQuery(QueryQL.Vehicles.Online)
      .pipe(map(response=>{
        const results = !response.data.vehiclesOnlines ? [] : response.data.vehiclesOnlines.nodes.map((vehicle:any)=>{
          const result = {...vehicle.vehicle}
          result.id = vehicle.id
          if(result.vehicleStatuses.nodes.length){
            result.alerts = result.vehicleStatuses.nodes[0].alerts.nodes[0]
            result.state = result.vehicleStatuses.nodes[0].state
          }

          return result
        })
        switch(sort){
          case "alert":
            return results.sort((a:any, b:any)=>
              a.alerts.alertType.severity - b.alerts.alertType.severity
            )
            break;
          default:
            return results
            break;
        }

      }))
  }

  getOfflineVehicles(){
    return this.basicFilteredQuery(QueryQL.Vehicles.Offline)
      .pipe(map(response=>{
        return response.data.vehiclesOfflines.nodes.map((vehicle:any)=>{
          return {...vehicle}
        })
      }))
  }

  getVehicleOnlineStatus(variables:any){
      return this.basicFilteredQuery(QueryQL.Vehicles.OnlineOrOfflineById, variables)
        .pipe(map(response=>{
          const results = response.data
          return { online: !results.online.nodes.length ?
                         null : {...results.online.nodes[0]}
                   , offline: !results.offline.nodes.length ?
                        null : {...results.offline.nodes[0]}
                  }
        }))  
  }

  getVehicleById(variables:any){
    return this.basicFilteredQuery(QueryQL.Vehicles.ById, variables)
  }

  getSegmentationMapByHeaderId(variables:any){
    return this
      .basicFilteredQuery(QueryQL.Images.SegmentationMapByHeaderId, variables)
      .pipe(map(response=>{
        if(!response.data.cameraMessageHeaders)
          return []

        return response.data.cameraMessageHeaders.nodes.filter((msg:any, index:number, array:any[]) =>{
          const segmentation = msg.cameraMessagesByHeaderId.nodes[0].segmentationMapsByMsgId.nodes[0]
          
          return !!segmentation && segmentation.msg.image.encoding === "mono8"
        }).map((msg:any)=>{
            const segmentation = msg.cameraMessagesByHeaderId.nodes[0].segmentationMapsByMsgId.nodes[0]
            
            return {segmentation:segmentation.msg.image}
        })[0]

      }))
  }

  getImagePreview(variables:any){
    return this.basicFilteredQuery(QueryQL.Images.PreviewByVehicleIdTopicName, variables)
    .pipe(map((response:any)=>{
      const cameraData = response.data.topics.nodes[0].cameras
      const totalCount = cameraData.totalCount
      const images = cameraData.nodes.map((info:any)=>{
        const image =  {
            ...info.msg.image
            , timestamp: new Date(info.readingat).toUTCString()
            , vehicle: info.vehicle.name
            , id: info.id
            , imageId: uuid()
            , headerId : info.msg.header.headerId
            , meta : info.msg.cameraMeta
          }
        
        return image
      })
      return {cameraData, totalCount, images }
    }))
  }

  getAlerts(){
    return this.graphService
      .watchQuery<any>({ query: QueryQL.Notifications.Alerts })
      .valueChanges
  }

  getVehiclePreviousLocation(variables:any = {}){
    return this.basicFilteredQuery(QueryQL.Geolocation.PreviousLocation, variables)
    .pipe(map((response:any)=>{
      return response.data.starfires.nodes.length ? response.data.starfires.nodes[0].msg : null
    }))
  }

  getVehicleStatus(variables:any){
    return this.basicFilteredQuery(QueryQL.Status.Vehicle, variables)
    .pipe(map((response:any)=>{
      const nodes =  response.data.vehicleStatuses.edges.map((results:any)=>{
        const node = results.node
        return {
            id:node.id
            , missionStats: node.statusMessage.missionStats
            , timestamp:node.statusMessage.header.readingat
            , headerId: node.statusMessage.header.headerid
            , node: node.statusMessage.header.node
            , topic: node.topic.name
            , state: node.state
            , alerts: node.alerts.nodes
            , vehicleStatusDetails: node.vehicleStatusDetails.nodes
          }
      })
      return {
        ...response.data.vehicleStatuses.pageInfo
        ,totalCount: response.data.vehicleStatuses.totalCount
        , nodes
      }
    }))
  }

  getVehiclePreviewImages(variables={}){
    return this.basicFilteredQuery(QueryQL.Images.PreviewDetailsByVehicleId, variables)
    .pipe(map((response:any)=>{
      return response.data.topicCategories.nodes[0].topics.nodes.map((item:any)=>{
        const preview = item.cameras.nodes[0]
          if(!preview)
            return null
            
          const cameraMessages = preview.msg.image.cameraMessages.nodes[0]
          const image = cameraMessages.image
          const header = cameraMessages.header
          return {
            topic: preview.topic.name
            , topicId: preview.topic.id
            , image
            , header: header
          }
      })
    }))
  }

  getVehicleLocationByDateTimestamp(variables={}){
    return this.basicFilteredQuery(QueryQL.Geolocation.ByVehicleIdDateTimestamp, variables)
    .pipe(map((response:any)=>{
      return response.data.starfires.nodes 
      // ? null :
      //   response.data.starfires.nodes.map((geo:any)=>{
      //     return {
      //       readingat: geo.readingat
      //       , id : geo.id
      //       , ...geo.msg
      //       , headerId: geo.msg.headerId
      //     }
      //   })
    }))
  }

  getAllVehicleLogsStatusDetection(variables:any={logType:[], paginationRange:25, nodes:[]}){
    return this.basicFilteredQuery(
          QueryQL.Logging.QueryBuilder(
                  variables.logType
                  , variables.paginationRange
                  , variables.nodes
                )
              , variables)
          .pipe(map((response:any)=>{
            const logging:any = []
              if(!response || !response.data)
                return logging

              response.data.logging ? response.data.logging.nodes.map((item:any)=>item.vehicleLogsByMessageId.nodes.forEach((innerItem:any)=>{logging.push(innerItem)})) :null

              return [].concat(logging || [])
                .concat(response.data.objectDetection ? response.data.objectDetection.nodes : [])
                .concat(response.data.vehicleStatus ? response.data.vehicleStatus.nodes : [])
                .sort((a,b)=>new Date((b as any).readingat).valueOf() - new Date((a as any).readingat).valueOf())
          }))
  }

  getPreviewImageByCameraMessageHeaderId(variables={}){
    return this.basicFilteredQuery(QueryQL.Images.PreviewByMessageHeaderId, variables)
        .pipe(map((response:any)=>{
          const result = response.data.cameraMessageHeaders.nodes.map((node:any)=>{
                return node.cameraMessagesByHeaderId.nodes[0].camerasByMsgId.nodes[0]
            }).filter((result:any)=>!!result)
          if(!result.length)
            return null

          const recentResult =  result[result.length-1].msg
          const header =  recentResult.header

            return {
              seq: header.seq
              , node: header.node
              , readingat: header.readingat
              , image: recentResult.image
            }
        }))
  }

  getObjectDetectionByVehicleId(variables={}){
    return this.basicFilteredQuery(QueryQL.Detection.ByVehicleId, variables)
    .pipe(map((response:any)=>{
      return response.data.objects
    }))
  }

  getLoggingNodes(variables={}){
    return this.basicFilteredQuery(QueryQL.Logging.NodesByVehicleId, variables)
    .pipe(map((response:any)=>{
      return response.data.vehicleLogNodeTypes.nodes
    }))
  }

  getTopicsByCategoryVehicleId(variables={}){
    return this.basicFilteredQuery(QueryQL.Topics.ByCategoryVehicleId, variables)
    .pipe(map((response:any)=>{
      const byList:any = []
      response.data.list.nodes.filter((item:any)=>{
        return item.vehicleTopics.nodes.length
      }).forEach((item:any)=>{
        return item.vehicleTopics.nodes.map((vehicleTopic:any)=>{
          byList.push(vehicleTopic.topic)
        })
      })
      const byCategory =  response.data
            .category.nodes[0]
            .topics.nodes.map((result:any)=>{
              if(result.vehicleTopics.nodes.length)
                return result.vehicleTopics.nodes[0].topic
              return null
            }).filter((results:any)=>!!results)
      
      return [...byCategory, ...byList]
    }))

  }

  getPreviewImagesByTopicNameVehicleId(variables={}){
    return this.basicFilteredQuery(QueryQL.Images.ByTopicNamesVehicleId, variables)
    .pipe(map((response:any)=>{
      if(!response.data.topics)
        return null;
        
      return response.data.topics.nodes.map((result:any, index:number, array:any[])=>{
        if(!result.cameras.nodes.length)
          return {topic:result.vehicleTopics.nodes[0].topic};

        const msg = result.cameras.nodes.length ? {...result.cameras.nodes[0].msg } : null
        const topic = result.cameras.nodes[0].topic
        const header = msg.header

        return {
          topic
          , header
          , image: msg.image
        }

      })
    }))

  }

  getObjectDetectionHeaderIdByVehicleId(variables={}){
    return this.basicFilteredQuery(QueryQL.Detection.HeaderIdByVehicleId, variables)
    .pipe(map((response:any)=>{
      return response.data.objects
    }))
  }

  getObjectDetectionImages(variables={}){
    return this.basicFilteredQuery(QueryQL.Images.ObjectDetectionImagesByVehicleId, variables)
    .pipe(map((response:any)=>{
        return {
          totalCount:response.data.objectDetectionImages.totalCount
          , nodes:response.data.objectDetectionImages.nodes.map((data:any)=>{
          return {
            image: {
              id: data.imageId
              , encoding: data
              , height: data.height
              , width: data.width
            }
            , header: {
                headerId: data.headerId
                , readingat: data.readingat
            }
            , cameraMeta:{
                cameraName: data.cameraName
                , leftExposure: data.leftExposure
                , rightExposure: data.rightExposure
                , leftGain: data.leftGain
                , rightGain: data.rightGain
            }
          }
        })
      }
    }))
  }

}
