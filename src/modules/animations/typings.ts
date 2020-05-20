export type AnimationsList = {
    [key: string]: FunctionAnimation;
}

export type FunctionAnimation = (data: DataFunctionAnimation) => void;

export type DataFunctionAnimation = {
    modal: HTMLElement,
    overlay: HTMLElement
}

export type OptionsAnimationManager = {
    open?: FunctionAnimation,
    close?: FunctionAnimation
}