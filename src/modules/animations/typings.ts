export type AnimationsCollection = {
    [key: string]: FunctionAnimation;
}

export type FunctionAnimation = (data: DataFunctionAnimation) => void;

export type DataFunctionAnimation = {
    modal: HTMLElement
}