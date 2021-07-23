import  { Pool, Client } from 'pg'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
let client, pool;
if(process.env.NODE_ENV === "development"){
    const connectionString = process.env.DEV_DATABASE_URL
    client = new Client({ connectionString })
    client.connect(err => {
        if (err) {
        console.error('error connecting: client', err.stack)
        } else {
        console.log('connected: client')
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

export {client, pool }

