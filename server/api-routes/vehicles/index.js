import express from "express";
import * as ScheduledTasks from '../../database/postgres/queries/scheduled-tasks'
import Images from './images'
import Geolocation  from './geolocation'
import Status from './status'
import Objects from './object'

const childRouter = express.Router();
const parentRouter = express.Router();
ScheduledTasks.removeOfflineVehicles()

try{
    childRouter.use('/images', Images);
    childRouter.use('/geolocation', Geolocation);
    childRouter.use('/status', Status);
    childRouter.use('/object', Objects);

    parentRouter.use('/', childRouter)

}catch(err){
    console.log(err)
}

export  {parentRouter as default}
