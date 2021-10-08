import moment from "moment";

export const createPartitionsByDay = (startFrom, table) =>{
    const now = moment().utc()
    let sql = ``
    
    while( now > moment(startFrom).utc()){
        sql =`
            ${sql}
            CREATE TABLE IF NOT EXISTS ${table}${now.format("YYYY_MM_DD").toString()}
            PARTITION OF logging.vehicle_logs_partitioned
            FOR VALUES
            FROM ('${now.format("YYYY_MM_DD").toString()} 00:00:00.000000-05')
            TO ('${now.format("YYYY_MM_DD").toString()} 23:59:59.999999-05');
        `
        now.subtract(1,"day")
    }

    return sql
}