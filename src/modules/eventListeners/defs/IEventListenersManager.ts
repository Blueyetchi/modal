import {EventFunction} from "../typings";

export default interface IEventListenersManager {

    register(eventName: string, event: EventFunction): void;

    initAllEventListeners(): void;
}