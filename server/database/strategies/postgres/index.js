import * as Topics from './queries/topics'
import * as Geolocation from './queries/starfire'
import EventEmitter from 'events'
import * as DB_EVENTS from '../../events'

class Postgres extends EventEmitter {
    constructor(){
        super()

    }

    create({query="",data=null,options={},callback=a=>a,event}){
        data.vehicle = {id:"1234", name:'Gilroy Tractor', type: 'tractor'}
        Geolocation.sqlInsertStarFire(query, data)
    }

    read(){}
    update(){}
    delete(){}
}

const db = new Postgres()

export {db as default}