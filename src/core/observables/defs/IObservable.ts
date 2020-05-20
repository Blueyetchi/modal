import {GenericObject} from "../../typings";
import {IObserver} from "./index";

/**
 * @interface IObservable
 *
 * Contract for Observable
 *
 * Observable design pattern : https://refactoring.guru/design-patterns/observer
 *
 */
export default interface IObservable {

    /**
     * @desc Notify all registered observers subscribed to the eventType
     * @throws Error
     */
    notify(eventType: string, data: GenericObject): void;

    /**
     * @desc Subscribe an observer to a specific event type
     * @throws Error
     */
    subscribe(eventType: string, observers: IObserver[]): void;

    /**
     * @desc Unsubscribe an observer to a specific event type
     * @throws Error
     */
    unsubscribe(eventType: string, observer: IObserver): void;

}