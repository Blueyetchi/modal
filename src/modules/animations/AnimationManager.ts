import {IAnimationManager} from "./defs";
import {AnimationsCollection, DataFunctionAnimation, FunctionAnimation} from "./typings";

/**
 * @class AnimationManager
 *
 * Manages all animations of the modal
 *
 */
export default class AnimationManager implements IAnimationManager {

    /******************************************************************************* | Properties
     * @desc Collection of all animations registered
     */
    private _animationsCollection: AnimationsCollection = {};

    /**
     * @desc Register a new animation
     */
    register(animationName: string, animation: FunctionAnimation): void {
        this._animationsCollection[animationName] = animation;
    }

    /**
     * @desc Trigger an animation by name
     * @throws Error
     */
    trigger(animationName: string, data: DataFunctionAnimation): void {
        if (this._animationsCollection.hasOwnProperty(animationName)) {
            this._animationsCollection[animationName](data);
        } else {
            throw new Error(`The animation  "${animationName}" can't be triggered because it doesn't exist.`);
        }
    }

}