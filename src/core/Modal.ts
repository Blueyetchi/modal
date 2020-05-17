import {IModal} from "./defs";
import {ITemplateManager} from "../modules/template/defs";
import {IAnimationsManager} from "../modules/animations/defs";

export default class Modal implements IModal{

//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    private _templateManager: ITemplateManager;
    private _animationsManager: IAnimationsManager;
    private _isInjected: boolean;

    constructor() {
        this._isInjected = false;
    }

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    public close(): void {
        if (this._isInjected) {
            this._triggerCloseAnimation();
            this._removeFromDom();
            this._isInjected = false;
        }
    }

    public open(): void {
        if (!this._isInjected) {
            this._injectInDom();
            requestAnimationFrame(() => {
                this._triggerOpenAnimation();
            });
            this._isInjected = true;
        }
    }

    public getAnimationsManager(): IAnimationsManager {
        return this._animationsManager;
    }

    public getTemplateManager(): ITemplateManager {
        return this._templateManager;
    }

    public setAnimationsManager(animationsManager: IAnimationsManager): void {
        this._animationsManager = animationsManager;
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