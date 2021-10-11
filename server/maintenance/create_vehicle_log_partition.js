const  moment  = require( 'moment')
const  { Pool, Client } = require( 'pg')
const dotenv = require( 'dotenv')
const process = require( 'process');

dotenv.config({ path: './.env' })
let client, pool;

if(process.env.NODE_ENV === "development"){
    const connectionString = process.env.DEV_DATABASE_URL
    client = new Client({ connectionString })
    client.connect(err => {
        if (err) {
        console.error('error connecting: client', err.stack)
        } else {
        console.log('connected: client', process.pid)
        }
    })

    pool = client;
}else {
    const connectionString = process.env.DATABASE_URL
    pool = new Pool({ connectionString,
        ssl: { 
            rejectUnauthorized: false
         }, // Only enable TLS/SSL connections for Heroku.     
    })   

    pool.connect()
        .then(client => {
            console.log('connected: pool')
            client.release()
        })
        .catch(err => console.error('error connecting: pool', err.stack))
    
    client = pool
}


const timestampFormat = 'YYYY-MM-DD HH:mm:ssZZ'

const formatDateTime  = (datetime)=>{
    return moment(datetime/1000000).utc().format(timestampFormat)
}

const addVehcileLogPartition = () =>{
    try{
        const day = moment().add(2, 'days').utc().format("yyyy_MM_DD").toString()
        return client.query(`
            CREATE TABLE IF NOT EXISTS logging.vehicle_logs_d${day}
            PARTITION OF logging.vehicle_logs_partitioned
            FOR VALUES
            FROM ('${day} 00:00:00.000000+00')
            TO ('${day} 23:59:59.999999+00');

            CREATE TRIGGER vehicle_nodes_trigger${day}
            AFTER INSERT ON  logging.vehicle_logs_d${day}FOR EACH ROW
            EXECUTE PROCEDURE  logging.vehicle_log_nodes_insert();
        `);
    
    }catch (e){
        return Promise.reject(0)
    }
}


addVehcileLogPartition().then((data)=>{
    console.log(data)
    process.exit(1);
}, 
(data)=>{
    console.log(data)
    process.exit(0);
})
