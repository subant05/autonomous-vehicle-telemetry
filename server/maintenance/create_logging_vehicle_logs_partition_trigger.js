import {formatDateTime} from '../database/postgres/queries/_utils'
import moment from 'moment'
const { client, pool } = require("../database/postgres/connection")
try{
const queryResult = await client.query(`
    CREATE TRIGGER vehicle_nodes_trigger
    AFTER INSERT ON  logging.vehicle_logs_p${moment().utc().format("yyyy_MM_DD").toString()} FOR EACH ROW
    EXECUTE PROCEDURE  logging.vehicle_log_nodes_insert();
`);

}catch (e){

}
