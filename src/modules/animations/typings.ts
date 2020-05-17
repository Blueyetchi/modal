export type AnimationsCollection = {
    [key: string]: AnimationFunction;
}

export type AnimationFunction = (data: DataAnimationFunction) => void;

/**
 * Object passed by the user when he wants to override default animations
 *
 * @example byModal.animations(options: AnimationsOptionsSetup);
 */
export type AnimationsOptionsSetup = {
    open: AnimationFunction,
    close: AnimationFunction
}


export type DataAnimationFunction = {
    modal: HTMLElement,
}
