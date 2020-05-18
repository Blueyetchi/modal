import {IModal} from "./defs";
import {ITemplateManager} from "../modules/template/defs";
import {IAnimationsManager} from "../modules/animations/defs";
import {IEventListenersManager} from "../modules/eventListeners/defs";

export default class Modal implements IModal{

//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    private _templateManager: ITemplateManager;
    private _animationsManager: IAnimationsManager;
    private _eventListenersManager: IEventListenersManager;
    private _isInjected: boolean;

    constructor() {
        this._isInjected = false;
    }

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    public close(): void {
        if (this._isInjected) {
            this._isInjected = false;
            if (this._animationsManager.has('close')) {
                this._triggerCloseAnimation();
            }
            this._removeFromDom();
        }
    }

    public open(): void {
        if (!this._isInjected) {
            this._isInjected = true;
            this._injectInDom();

            /* Trigger animation if set by the user */
            if (this._animationsManager.has('open')) {
                requestAnimationFrame(() => {
                    this._triggerOpenAnimation();
                });
            }

            /* Add class when the modal is open */
            this._templateManager.addOpenClass();
        }
    }

    public getAnimationsManager(): IAnimationsManager {
        return this._animationsManager;
    }

    public getEventListenersManager(): IEventListenersManager {
        return this._eventListenersManager;
    }

    public getTemplateManager(): ITemplateManager {
        return this._templateManager;
    }

    public setAnimationsManager(animationsManager: IAnimationsManager): void {
        this._animationsManager = animationsManager;
    }

    public setEventListenersManager(eventListenersManager: IEventListenersManager): void {
        this._eventListenersManager = eventListenersManager;
    }

    public setTemplateManager(templateManager: ITemplateManager): void {
        this._templateManager = templateManager;
    }

//----------------------------------------------------------------------
// Private methods
//----------------------------------------------------------------------
    private _injectInDom(): void {
        const parentHtml = this._templateManager.getHtmlParent();
        parentHtml.appendChild(this._templateManager.getHtmlTemplate());
    }

    private _removeFromDom(): void {
        const parentHtml = this._templateManager.getHtmlParent();
        parentHtml.removeChild(this._templateManager.getHtmlTemplate());
    }

    private _triggerOpenAnimation(): void {
        this._animationsManager.trigger( 'open', {modal: this._templateManager.getHtmlTemplate()});
    }

    private _triggerCloseAnimation(): void {
        this._animationsManager.trigger( 'close', {modal: this._templateManager.getHtmlTemplate()});
    }
}