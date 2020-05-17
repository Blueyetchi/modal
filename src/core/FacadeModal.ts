import {IFacadeModal, IModal, IModalBuilder} from "./defs";
import {AnimationsOptionsSetup} from "../modules/animations/typings";
import {TemplateManagerOptionsConstructor} from "../modules/template/typings";
import {ModalBuilder} from "./index";
import Modal from "./Modal";

export default class FacadeModal implements IFacadeModal{
//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    private _modal!: IModal;

    constructor() {
        this._modal = new ModalBuilder(new Modal()).build();
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

    public close(): void {
        this._modal.close();
    }

    public htmlContent(): HTMLElement {
        return this._modal.getTemplateManager().getHtmlTemplate();
    }

    public init(): this {
        /* Register all event listener */
        this._registerAllEventListeners();
        /* Init all event listeners */
        this._modal.getEventListenersManager().initAllEventListeners();

        return this;
    }

    public template(options: TemplateManagerOptionsConstructor): this {
        this._modal.getTemplateManager().fillOptions(options);

        return this;
    }

    public open(): void {
        this._modal.open();
    }

    private _registerAllEventListeners(): void {
        /* Register onClickButtonClose eventListener */
        this._modal.getEventListenersManager().register('onClickButtonClose', () => {
            let htmlButtonCLose = this._modal.getTemplateManager().getHtmlButtonCLose();

            htmlButtonCLose.addEventListener('click', () => {
                this._modal.close();
            })
        })
    }
}