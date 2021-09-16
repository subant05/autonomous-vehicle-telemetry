const { client, pool } = require("../connection.js")
import moment from 'moment';

export const removeOfflineVehicles = async ()=>{
    await client.query(`
    DELETE FROM vehicles.vehicles_online 
    WHERE updated_at < $1;
    `,
        [
            moment()
            .subtract(1, 'minutes')
            .utc()
            .format('YYYY-MM-DD HH:mm:ssZZ')
        ]
    )

    setTimeout(()=>removeOfflineVehicles(), 500)
}

export const publishOnlineVehicles = async ()=>{
    await client.query(`
    select pg_notify(
        'postgraphile:online_vehicles',
        json_build_object(
          '__node__', json_build_array(
            (select id from vehicles.vehicles_online )
          )
        )::text
      )
    `)

    setTimeout(()=>publishOnlineVehicles(), 500)

}