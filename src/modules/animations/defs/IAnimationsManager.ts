import {AnimationFunction, DataAnimationFunction} from "../typings";

export default interface IAnimationsManager {
    /* Register a new animation */
    register(animationName: string, animation: AnimationFunction): void;

    /* Trigger an animation */
    trigger(animationName: string, data: DataAnimationFunction): void;
}