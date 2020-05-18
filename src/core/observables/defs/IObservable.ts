import {EventData, EventType} from "../typings";
import {IObserver} from "./index";

/**
 * @interface IObserver
 *
 * Contract for Observable class
 *
 * Observable design pattern : https://refactoring.guru/design-patterns/observer
 *
 */
export default interface IObservable {

    /**
     * @desc Notify all registered observers subscribed to the eventType
     */
    notify(eventType: EventType, data: EventData): void;

    /**
     * @desc Subscribe a new observer to a specific event type
     */
    subscribe(eventType: EventType, observer: IObserver): void;

    /**
     * @desc Unsubscribe an observer to a specific event type
     * @throws Error
     */
    unsubscribe(eventType: EventType, observer: IObserver): void;
}