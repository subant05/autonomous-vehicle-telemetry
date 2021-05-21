export interface IGeolocationConfig {
    container:string;
    coordinates:number[][];
    showTractor?:boolean;
    lineColor?:string;
    lineSize?:number;
    center?:number[];
    zoom?:number
}

export interface IGeoJSONArgs {
    type:string
    dataType:string
    geometryType:string
    coordinates:number[][] | number[]
}

export interface IAddImageArgs {
    coordinates:number[][] | number[]
    map:any
}

export interface IPaintLine {
    lineColor?:string;
    lineSize?:number
}