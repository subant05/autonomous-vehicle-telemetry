import { gql } from 'apollo-angular';
import {logging} from './partials/logging'
import {objectDetection} from './partials/objectDetection'
import {vehicleStatus} from './partials/vehicleStatus'


const checkForType = (type, typeList)=>{
    return typeList.indexOf(type) > -1 || !typeList.length
}

const loggingQueryBuilder = (types=[], paginationRange=25)=>{    
    if(!types)
        types = []
        
    return gql`
            query Logging ($cursor:Int $vehicleId:BigInt $startDateTime:Datetime $endDateTime:Datetime){ 
            ${ checkForType("logging",types) ? logging(paginationRange) : `` }
            ${ checkForType("object",types) ? objectDetection(paginationRange) : `` }
            ${ checkForType("status",types) ? vehicleStatus(paginationRange) : `` }
            }`
}


export {loggingQueryBuilder as default}