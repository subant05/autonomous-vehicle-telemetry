export interface IGeolocationConfig {
    container:string;
    coordinates:number[][];
    showTractor?:boolean;
    lineColor?:string;
    lineSize?:number;
    center?:number[] | null | undefined;
    zoom?:number
}

export interface IGeoJSONArgs {
    type:string
    dataType:string
    geometryType:string
    coordinateType?:string
    coordinates:number[][] | number[]
}

export interface IAddImageArgs {
    coordinates:number[][] | number[]
    map:any
    name?:string
}

export interface IPaintLine {
    lineColor?:string;
    lineSize?:number
    source:string
}