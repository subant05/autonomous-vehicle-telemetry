import { sqlInsertVehicleStatus } from "."

const getsSqlBatchGenerator = (topic, batch=[], cb=a=>a) => {
    return {
                async* [Symbol.asyncIterator](){
                    cb(null, "Data Recieved" )

                    try{
                        const length = batch.length 
                        let count = 0
    
                        if(!length)
                            return null;
    
                        do{
                            yield sqlInsertVehicleStatus(topic, batch[count] );
                        }while(++count < length)
                        cb(null, "Status Batch Uploaded")

                    } catch(err){
                        console.log("INSERT STATUS BATCH ERROR MESSAGE: ", e.message)
                        console.log("INSERT STATUS BATCH ERROR STACK: ", e.stack)

                        // cb("Status Batch Upload Failed")
                        return null;
                    }

                }

        }
}

export const sqlInsertVehicleStatusBatch = async (batch=[], cb=a=>a) =>{
    try{
        if(!batch.length)
            return null;

        const iter = getsSqlBatchGenerator(batch[0].topic, batch, cb)[Symbol.asyncIterator]()
        let status;
        do{
            status = await iter.next();
        } while(!status.done)

    } catch(e){
        console.log("INSERT STATUS BATCH LOOP ERROR MESSAGE: ", e.message)
        console.log("INSERT STATUS BATCH LOOP ERROR STACK: ", e.stack)
        cb("Status Batch Upload Failed")
        return null
    }

}