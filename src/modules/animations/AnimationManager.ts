import {IAnimationManager} from "./defs";
import {AnimationsList, DataFunctionAnimation, FunctionAnimation, OptionsAnimationManager} from "./typings";
import {IObserver} from "../../core/observables/defs";
import {EventData} from "../events/typings";
import {error, validator} from "../../helpers";
import constants from "../../constants";

/**
 * @class AnimationManager
 *
 * Manages all animations of the modal
 *
 */
export default class AnimationManager implements IAnimationManager, IObserver {

    /******************************************************************************* | Properties
     * @desc Collection of all animations registered
     */
    private _animations: AnimationsList = {};

    constructor() {
        for(const animationName in constants.animation.NAME) {
            if (constants.animation.NAME.hasOwnProperty(animationName)) {
                this.register(constants.animation.NAME[animationName], function (options) {});
            }
        }
    }

    /******************************************************************************* | Public methods
     * @desc Receive the notification of observable
     */
    public onNotified(eventType: string, data: EventData): void {
        console.log(`A notification of type ${eventType} has been sent with data :`, data);
    }

    /**
     * @desc Register a new animation
     * @throws
     */
    public register(animationName: string, animation: FunctionAnimation): void {
        validator.isFunctionOrThrowError(animation);
        if (this._animations.hasOwnProperty(animationName)) {
            error.throwError(
                constants.error.ACTION_NAME.ANIMATION_REGISTER,
                `Animation ${animationName} is already registered`
            );
        }

        this._animations[animationName] = animation;
    }

    /**
     * @desc Trigger an animation by name
     * @throws Error
     */
    public trigger(animationName: string, data: DataFunctionAnimation): void {
        if (!this._animations.hasOwnProperty(animationName)) {
            error.throwError(
                constants.error.ACTION_NAME.ANIMATION_TRIGGER,
                `Animation ${animationName} is not registered`
            );
        }

        this._animations[animationName](data);
    }
}