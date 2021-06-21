const { client, pool } = require("../connection.js")
import moment from 'moment';

export const removeOfflineVehicles = async ()=>{
    await client.query(`
    DELETE FROM vehicles.vehicles_online 
    WHERE updated_at < $1`,
        [
            moment()
            .subtract(3, 'minutes')
            .utc()
            .format('YYYY-MM-DD HH:mm:ssZZ')
        ]
    )

    setTimeout(()=>removeOfflineVehicles(), 1000)
}