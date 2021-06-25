import * as Topics from './queries/topics'
import * as Geolocation from './queries/starfire'
import * as ScheduledTasks from './queries/scheduled-tasks'
import * as Images from './queries/images'
import EventEmitter from 'events'
import * as DB_EVENTS from '../../events'

class Postgres extends EventEmitter {
    constructor(){
        super()
        ScheduledTasks.removeOfflineVehicles()
        ScheduledTasks.publishOnlineVehicles()
    }       

    create({query="",data=null,options={},callback=a=>a,event}){
        Geolocation.sqlInsertStarFire(query, data)
        Images.sqlInsertImagePreview(query, data)
    }

    read(){}
    update(){}
    delete(){}
}

const db = new Postgres()

export {db as default}