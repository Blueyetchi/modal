import {IAnimationsManager} from "./defs";
import {AnimationFunction, AnimationsCollection, DataAnimationFunction} from "./typings";

export default class AnimationsManager implements IAnimationsManager{
//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    private _animations: AnimationsCollection;

    constructor() {
        this._animations = {};
    }
//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    /* Register a new animation */
    public register(animationName: string, animation: AnimationFunction): void {
        if (this._animations.hasOwnProperty(animationName)) {
            throw new Error(`The animation ${animationName} can't be registered because it already exists`);
        }
        this._animations[animationName] = animation;
    }

    /* Trigger animation which has the name passed in parameter */
    public trigger(animationName: string, data: DataAnimationFunction): void {
        if (this._animations.hasOwnProperty(animationName)) {
            this._animations[animationName](data);
        } else {
            throw new Error(`The animation ${animationName} doesn't exists`);
        }
    }
}