import {IAnimationManager} from "../../animations/defs";
import {IEventManager} from "../../events/defs";
import {ITemplateManager} from "../../template/defs";

/**
 * @interface IModal
 *
 * Contract for the Modal class
 *
 */
export default interface IModal {

    /**
     * @desc Close the modal
     */
    close(): void;

    /**
     * @desc Getter for animation manager property
     */
    getAnimationManager(): IAnimationManager;

    /**
     * @desc Getter for event manager property
     */
    getEventManager(): IEventManager;

    /**
     * @desc Getter for template manager property
     */
    getTemplateManager(): ITemplateManager;

    /**
     * @desc Init events of the modal (onCLick close button for instance)
     */
    initEvents(): void;

    /**
     * @desc Open the modal
     */
    open(): void;

    /**
     * @desc Setter for animation manager property
     */
    setAnimationManager(animationsManager: IAnimationManager): void;

    /**
     * @desc Setter for event property
     */
    setEventManager(eventManager: IEventManager): void;

    /**
     * @desc Setter for template manager property
     */
    setTemplateManager(templateManager: ITemplateManager): void;
}