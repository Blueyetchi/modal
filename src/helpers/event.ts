import {IModal} from "../modules/modal/defs";
import {EventData} from "../modules/events/typings";

function createEventData(modal: IModal): EventData {
    return {
        emitter: modal
    }
}

export default {
    createEventData,
}