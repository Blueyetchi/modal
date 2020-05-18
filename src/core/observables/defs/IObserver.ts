import {EventData} from "../typings";

/**
 * @interface IObserver
 *
 * Contract for Observer class
 *
 * Observable design pattern : https://refactoring.guru/design-patterns/observer
 */
export default interface IObserver {

    /**
     * @desc Receive the notification of linked observable
     */
    onNotified(eventType: EventData): void;
}