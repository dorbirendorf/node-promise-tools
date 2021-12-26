export declare type PromiseIterable = Iterable<any> | Promise<Iterable<any>>;
export interface IPropsInput {
    [key: string]: Promise<any>;
}
export interface IPropsOutput {
    [key: string]: any;
}
