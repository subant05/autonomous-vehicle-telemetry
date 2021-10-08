import {formatDateTime} from '../database/postgres/queries/_utils'
import moment from 'moment'
const { client, pool } = require("../database/postgres/connection")

try{
    const day = moment().add(4, 'days').utc().format("yyyy_MM_DD").toString()
    const queryResult = await client.query(`
        CREATE TABLE IF NOT EXISTS logging.vehicle_logs_d${day}
        PARTITION OF logging.vehicle_logs_partitioned
        FOR VALUES
        FROM ('${day} 00:00:00.000000+00')
        TO ('${day} 23:59:59.999999+00');
    `);

}catch (e){

}


