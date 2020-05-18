import {DataFunctionAnimation, FunctionAnimation} from "../typings";

/**
 * @interface IAnimationManager
 *
 * Contract for the AnimationManager class
 *
 */
export default interface IAnimationManager {
    /**
     * @desc Register a new animation
     */
    register(animationName: string, animation: FunctionAnimation): void;

    /**
     * @desc Trigger an animation by name
     * @throws Error
     */
    trigger(animationName: string, data: DataFunctionAnimation): void;
}