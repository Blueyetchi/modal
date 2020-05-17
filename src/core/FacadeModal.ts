import {IFacadeModal, IModal, IModalBuilder} from "./defs";
import {AnimationsOptionsSetup} from "../modules/animations/typings";
import {TemplateManagerOptionsConstructor} from "../modules/template/typings";

export default class FacadeModal implements IFacadeModal{
//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    private _modal!: IModal;

    constructor(modal: IModal) {
        this._modal = modal;
    }

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    /**
     * @example options = {
     *              open: function(modal: HTMLElement),
     *              close: function(modal: HTMLElement)
     *          }
     */
    public animations(options: AnimationsOptionsSetup): this {
        for (const animationName in options) {
            if (options.hasOwnProperty(animationName)) {
                // @ts-ignore
                let animation = options[animationName];
                this._modal.getAnimationsManager().register(animationName, animation);
            }
        }

        return this;
    }

    public className(): string {
        return this._modal.getTemplateManager().getClassName();
    }

    public htmlContent(): HTMLElement {
        return this._modal.getTemplateManager().getHtmlTemplate();
    }

    public template(options: TemplateManagerOptionsConstructor): this {
        this._modal.getTemplateManager().fillOptions(options);

        return this;
    }

    public close(): void {
        this._modal.close();
    }

    public open(): void {
        this._modal.open();
    }
}