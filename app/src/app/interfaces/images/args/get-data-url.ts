export interface GetDataUrl {
    id?:number;
    width:number;
    height:number;
    step?:number;
    is_bigendian?:number;
    data:number[]
    bitDepth?:number
    isSegmentation?:boolean
}
