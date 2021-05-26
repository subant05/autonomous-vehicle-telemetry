import level from 'level'
import EventEmitter from 'events'
import * as DB_EVENTS from '../events'
import { resolve } from 'path';

EventEmitter.defaultMaxListeners = 20

export default class LevelDB extends EventEmitter {
    constructor(){
        super()
        this.db = level("../db")
        this.db.clear()
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

                if(query === "/starfire")
                    console.log(savedData)

                this.emit(DB_EVENTS.DB_INSERT_SUCCESS,{query, data:savedData, options} )
    
                if(event)
                    this.emit(event, {query, data:savedData, options} )
                
            })
          })
        
        return this
    }

    async read({query="",options={},callback=a=>a,event}){
        if((typeof query !== 'string' || !query ))
            return this.emit(DB_EVENTS.DB_READ_ERROR,{query, options});
        
        this.db.get(query, (error,data)=>{
            callback(error,data)

            if(error){
                this.emit(DB_EVENTS.DB_READ_ERROR,{query, options, error});
            } else{
                this.emit(DB_EVENTS.DB_READ_SUCCESS,{query, data, options, error});
                if(event)
                    this.emit(event,{query, data, options, error});
            }

        })

        return this
    }

    reset(){
        this.db.clear()
    }
}

