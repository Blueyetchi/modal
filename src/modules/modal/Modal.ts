import {IModal} from "./defs";
import {IAnimationManager} from "../animations/defs";
import {ITemplateManager} from "../template/defs";
import {IEventManager} from "../events/defs";
import constants from "../../constants";
import {animation, event} from "../../helpers";

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
        this._templateManager.removeOpenClassModal();
        this._animationManager.trigger(
            constants.animation.NAME.CLOSE,
            animation.createDataFunctionAnimation(this)
        );
        this._removeFromDom();
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
     * @desc Init events of the modal (onCLick close button for instance)
     */
    public initEvents(): void {
        this._onCLickCloseButton();
    }

    /**
     * @desc Open the modal
     */
    public open(): void {
        this.initEvents();
        this._templateManager.addOpenClassToModal();
        this._animationManager.trigger(
            constants.animation.NAME.OPEN,
            animation.createDataFunctionAnimation(this)
        );
        this._injectInDom();
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

    /**
     * @desc Inject the modal in DOM
     */
    private _injectInDom(): void {
        const parent = this._templateManager.getHtmlParentModal();
        parent.appendChild(this._templateManager.getHtmlModal());
    }

    /**
     * @desc Remove the modal from DOM
     */
    private _removeFromDom(): void {
        const parent = this._templateManager.getHtmlParentModal();
        parent.removeChild(this._templateManager.getHtmlModal());
    }

    /**
     * @desc Init the event on click close button
     */
    private _onCLickCloseButton(): void {
        const closeButton = this._templateManager.getHtmlCloseButton();
        closeButton.addEventListener('click', () => {
            this.close();
        })
    }
}