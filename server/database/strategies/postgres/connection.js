import  { Pool, Client } from 'pg'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })

const connectionString = process.env.DATABASE_URL
const pool = new Pool({ connectionString })
const client = new Client({ connectionString })
client.connect()

export {client, pool}
