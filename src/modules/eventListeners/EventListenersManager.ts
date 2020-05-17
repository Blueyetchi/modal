import {IEventListenersManager} from "./defs";
import {EventsCollection} from "./typings";

export default class EventListenersManager implements IEventListenersManager {
    private _eventsCollection: EventsCollection = {};

    public initAllEventListeners(): void {
        for (const animationName in this._eventsCollection) {
            if (this._eventsCollection.hasOwnProperty(animationName)) {
                this._eventsCollection[animationName]();
            }
        }
    }

    public register(eventName: string, event: () => void): void {
        this._eventsCollection[eventName] = event;
    }
}