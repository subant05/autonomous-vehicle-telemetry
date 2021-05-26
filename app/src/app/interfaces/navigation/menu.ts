export interface IMenu {
    header:string
    links:IMenuLinks[]
}

export interface IMenuLinks {
    label:string;
    url?:string;
    callback?:Function
    tooltip?:string
}