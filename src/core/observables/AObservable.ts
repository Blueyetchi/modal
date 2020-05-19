import {IObservable, IObserver} from "./defs";
import {GenericObject} from "../typings";
import {error} from "../../helpers";
import constants from "../../constants";
import {ObjectCollection} from "../collection";

/**
 * @abstract Abstract class for Observable class
 *
 * Generic class for Observables
 *
 * Concept of generic class here : https://www.typescriptlang.org/docs/handbook/generics.html
 *
 */
export default abstract class AObservable implements IObservable{
    /******************************************************************************* | Properties
     * @desc Collection of observers
     */
    protected _observersCollection: ObjectCollection<IObserver>;

    /**
     * @desc Notify all registered observers subscribed to the eventType
     * @throws Error
     */
    public notify(eventType: string, data: GenericObject): void {
        if (!this._observersCollection.hasKey(eventType)) {
            error.throwError(
                constants.error.ACTION_NAME.OBSERVABLE_NOTIFY,
                `None event on behalf of ${eventType}`
            );
        }

        this._observersCollection.getData()[eventType].forEach(observer => observer.onNotified(eventType, data));
    }

    /******************************************************************************* | Public Methods
     * @desc Subscribe an observer to a specific event type
     * @throws Error
     */
    public subscribe(eventType: string, observer: IObserver): void {
        try {
            this._observersCollection.push(eventType, observer);
        } catch (e) {
            error.throwError(
                constants.error.ACTION_NAME.OBSERVABLE_SUBSCRIBE,
                `${e.message}`
            );
        }
    }

    /**
     * @desc Unsubscribe an observer to a specific event type
     * @throws Error
     */
    public unsubscribe(eventType: string, observer: IObserver): void {
        try {
            this._observersCollection.remove(eventType, observer);
        } catch (e) {
            error.throwError(
                constants.error.ACTION_NAME.OBSERVABLE_UNSUBSCRIBE,
                `${e.message}`
            )
        }
    }
}