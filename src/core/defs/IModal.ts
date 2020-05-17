import {IAnimationsManager} from "../../modules/animations/defs";
import {ITemplateManager} from "../../modules/template/defs";
import {IEventListenersManager} from "../../modules/eventListeners/defs";

export default interface IModal {
    /* Close the modal */
    close(): void;

    /* Retrieve the animations manager of the modal */
    getAnimationsManager(): IAnimationsManager;

    /* Retrieve the eventListeners manager of the modal */
    getEventListenersManager(): IEventListenersManager;

    /* Retrieve the template manager of the modal */
    getTemplateManager(): ITemplateManager;

    /* Open the modal */
    open(): void;

    /* Set the template manager of the modal */
    setAnimationsManager(animationsManager: IAnimationsManager): void;

    /* Set the eventListeners manager of the modal */
    setEventListenersManager(eventsManager: IEventListenersManager): void;

    /* Retrieve the template manager of the modal */
    setTemplateManager(templateManager: ITemplateManager): void;
}