import moment from "moment"

const timestampFormat = 'YYYY-MM-DD HH:mm:ssZZ'

export const formatDateTime  = (datetime)=>{
    return moment(datetime/1000000).utc().format(timestampFormat)
}