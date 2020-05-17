import {AnimationFunction, DataAnimationFunction} from "../typings";

export default interface IAnimationsManager {

    /* Check if animation with the given name is define */
    has(animationName: string): boolean;

    /* Register a new animation */
    register(animationName: string, animation: AnimationFunction): void;

    /* Trigger an animation */
    trigger(animationName: string, data: DataAnimationFunction): void;
}