import {IModal} from "./defs";
import {IAnimationManager} from "../animations/defs";
import {ITemplateManager} from "../template/defs";
import {IEventManager} from "../events/defs";

/**
 * @class Modal
 *
 * Gathers all components of the modal
 *
 */
export default class Modal implements IModal {

    /******************************************************************************* | Properties
     * @desc Animation manager of the modal
     */
    private _animationManager: IAnimationManager;

    /**
     * @desc Template manager of the modal
     */
    private _templateManager: ITemplateManager;

    /**
     * @desc Event manager of the modal
     */
    private _eventManager: IEventManager;

    /******************************************************************************* | Public methods
     * @desc Close the modal
     */
    public close(): void {
    }

    /**
     * @desc Getter for animation manager property
     */
    public getAnimationManager(): IAnimationManager {
        return this._animationManager;
    }

    /**
     * @desc Getter for event manager property
     */
    public getEventManager(): IEventManager {
        return this._eventManager;
    }

    /**
     * @desc Getter for template manager property
     */
    public getTemplateManager(): ITemplateManager {
        return this._templateManager;
    }

    /**
     * @desc Open the modal
     */
    public open(): void {
    }

    /**
     * @desc Setter for animation manager property
     */
    public setAnimationManager(animationsManager: IAnimationManager): void {
        this._animationManager = animationsManager;
    }

    /**
     * @desc Setter for event manager property
     */
    public setEventManager(eventManager: IEventManager): void {
        this._eventManager = eventManager;
    }

    /**
     * @desc Setter for template manager property
     */
    public setTemplateManager(templateManager: ITemplateManager): void {
        this._templateManager = templateManager;
    }
}