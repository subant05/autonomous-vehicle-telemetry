import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { rawListeners } from 'process';
import { v4 as uuid } from "uuid"
import { map } from 'rxjs/operators'
import {ImageService} from 'src/app/services/images/image.service'
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
        return response.data.cameraMessageHeaders.nodes.filter((msg:any) =>{
          if(!msg.cameraMessagesByHeaderId.nodes.length)
            return false
            
          return msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "rgb8" || 
                  msg.cameraMessagesByHeaderId.nodes[0].image.encoding === "mono8"
            }).map((msg:any)=>{
                const image = {...msg.cameraMessagesByHeaderId.nodes[0].image}
                image.data = JSON.parse(image.data.data)
                return image
            })
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
            , data: JSON.parse(info.msg.image.data.data) 
            , headerId : info.msg.header.headerId
            , meta : info.msg.cameraMeta
          }
          image.url = this.imageService.getDataURL(image)
        
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
            , image: {...image, data: JSON.parse(image.data.data)}
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

  getAllVehicleLogsStatusDetection(variables:any={logType:[], paginationRange:25}){
    return this.basicFilteredQuery(QueryQL.Logging.QueryBuilder(variables.logType, variables.paginationRange), variables)
    .pipe(map((response:any)=>{
        return [].concat(response.data.logging ? response.data.logging.nodes : [])
          .concat(response.data.objectDetection ? response.data.objectDetection.nodes : [])
          .concat(response.data.vehicleStatus ? response.data.vehicleStatus.nodes : [])
          .sort((a,b)=>new Date((b as any).readingat).valueOf() - new Date((a as any).readingat).valueOf())
    }))
  }

  getPreviewImageByCameraMessageHeaderId(variables={}){
    return this.basicFilteredQuery(QueryQL.Images.PreviewByMessageHeaderId, variables)
        .pipe(map((response:any)=>{
          if(!response.data.cameraMessageHeaders.nodes.length)
            return null

          const header =  response.data.cameraMessageHeaders.nodes[0]
          const image = header.cameraMessagesByHeaderId.nodes[0]
          return {
            seq: header.seq
            , node: header.node
            , readingat: header.readingat
            , ...image
          }
        }))
  }

}
