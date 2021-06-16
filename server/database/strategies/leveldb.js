import level from 'level'
import EventEmitter from 'events'
import * as DB_EVENTS from '../events'
import { resolve } from 'path';

EventEmitter.defaultMaxListeners = 0

export default class LevelDB extends EventEmitter {
    constructor(){
        super()
        this.db = level("./db")
    }

    async create({query="",data=null,options={},callback=a=>a,event}){
        if((typeof query !== 'string' || !query )&& !data)
            return this.emit(DB_EVENTS.DB_INSERT_ERROR,{query, data, options});

        this.db.get(query, (err, value) => {
            let storedValues
            if(err){
                storedValues = []
            }
            else
                storedValues = JSON.parse(value)
            
            if(options.unique )
                if(storedValues.findIndex(val=>{
                    return JSON.stringify(val)===JSON.stringify(data)
                }) !== -1){
                    storedValues =null
                    callback(new Error("Duplicate Data:"+JSON.stringify(data)))
                    return
                }

            storedValues.push(data)

            this.db.put(query, JSON.stringify(storedValues),(error,values)=>{
                callback(error,savedData)

                if(error){
                    return this.emit(DB_EVENTS.DB_INSERT_ERROR,{query, data:storedValues, options, error});
                }
    
                const savedData = storedValues.pop()
                storedValues = null

                this.emit(DB_EVENTS.DB_INSERT_SUCCESS,{query, data:savedData, options} )
    
                if(event)
                    this.emit(event, {query, data:savedData, options} )
                
            })
          })
        
        return this
    }

    async read({query="",options={},callback=a=>a,event}){
        const {cursor, limit, id}  = options


        if((typeof query !== 'string' || !query ))
            return this.emit(DB_EVENTS.DB_READ_ERROR,{query, options});
        
        this.db.get(query, (error,data)=>{

            let returnData = data ?  JSON.parse(data) : [];

            if(id) 
                returnData = returnData.filter(dataSet=>{
                    if(!dataSet.msg || !(dataSet.msg && (dataSet.msg.header || dataSet.msg.descriptor)))
                        return false 

                   return (dataSet.msg.header || dataSet.msg.descriptor).id == id
                })

            if(cursor || limit){
                const length  = returnData.length
                returnData = returnData.slice(
                    (cursor && cursor > 0) ? cursor-1 : 0
                    , (limit && limit > 0) ? limit : 1)

                returnData = returnData.map((dataSet, position)=>{
                    dataSet.pagination = {length, position,pageSize:limit}
                    return dataSet
                })
            }

            callback(error,returnData)

            if(error){
                this.emit(DB_EVENTS.DB_READ_ERROR,{query, options, error});
            } else{
                this.emit(DB_EVENTS.DB_READ_SUCCESS,{query, returnData, options, error});
                if(event)
                    this.emit(event,{query, returnData, options, error});
            }

        })

        return this
    }

    reset(){
        this.db.clear()
    }
}

