import {DataAnimationFunction} from "../typings";

export default interface IAnimationsManager {
    /* Register a new animation */
    register(animationName: string, animation: object): void;

    /* Trigger an animation */
    trigger(animationName: string, data: DataAnimationFunction): void;
}