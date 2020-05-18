import {IAnimationManager} from "../../animations/defs";

/**
 * @interface IModal
 *
 * Contract for the modal
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
    getAnimationManager(): object;

    /**
     * @desc Getter for event listener manager property
     */
    getEventListenerManager(): object;

    /**
     * @desc Getter for template manager property
     */
    getTemplateManager(): object;

    /**
     * @desc Open the modal
     */
    open(): void;

    /**
     * @desc Setter for animation manager property
     */
    setAnimationManager(animationsManager: IAnimationManager): void;

    /**
     * @desc Setter for event listener property
     */
    setEventListenerManager(): void;

    /**
     * @desc Setter for template manager property
     */
    setTemplateManager(templateManager: object): void;
}