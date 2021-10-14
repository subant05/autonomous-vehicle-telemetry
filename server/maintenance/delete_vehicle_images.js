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
        const currentMonth = moment().subtract(15, 'days').utc().format("YYYY-MM-DD").toString()

        return client.query(`
            delete from images.image_data where id in (
                select 
                    images.images.data_id as id 
                from images.images
                inner join images.camera_message on images.camera_message.image_id = images.images.id
                inner join images.camera on images.camera.msg_id = images.camera_message.id
                where images.camera.readingat < ${currentMonth}
            ) 
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


/**
 *             delete from images.camera_json where id not in (
                select 
                    images.camera.camera_json_id
                from images.camera
            );

            delete from images.camera_message_header where id not in (
                select 
                    images.camera_message.header_id as id
                from images.camera_message
            );

            delete from images.camera_meta where id not in (
                select 
                    images.camera_message.camera_meta_id as id
                from images.camera_message
            );
            delete from images.side_intrinsics where id not in (
                select 
                    images.camera_meta.left_intrinsics_id as id
                from images.camera_meta
            );
          delete from images.side_intrinsics where id not in (
                select 
                    images.camera_meta.right_intrinsics_id as id
                from images.camera_meta
            );
			
          delete from images.stereo_extrinsics where id not in (
                select 
                    images.camera_meta.stereo_extrinsics_id as id
                from images.camera_meta
            );
          delete from images.tractor_extrinsics where id not in (
                select 
                    images.camera_meta.tractor_extrinsics_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_e where id not in (
                select 
                    images.camera_meta.e_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_f where id not in (
                select 
                    images.camera_meta.f_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_r1 where id not in (
                select 
                    images.camera_meta.r1_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_r2 where id not in (
                select 
                    images.camera_meta.r2_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_p1 where id not in (
                select 
                    images.camera_meta.p1_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_p2 where id not in (
                select 
                    images.camera_meta.p2_id as id
                from images.camera_meta
            );
          delete from images.camera_meta_q where id not in (
                select 
                    images.camera_meta.q_id as id
                from images.camera_meta
            );
          delete from images.camera_roi where id not in (
                select 
                    images.camera_meta.left_roi_id as id
                from images.camera_meta
            );
          delete from images.camera_roi where id not in (
                select 
                    images.camera_meta.right_roi_id as id
                from images.camera_meta
            );

          delete from images.camera_histogram where id not in (
                select 
                    images.camera_meta.left_histogram_id as id
                from images.camera_meta
            );
			
          delete from images.camera_histogram where id not in (
                select 
                    images.camera_meta.right_histogram_id as id
                from images.camera_meta
            );
 */