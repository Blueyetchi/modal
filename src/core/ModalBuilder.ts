import {Builder} from "./abstracts";
import {IModal, IModalBuilder} from "./defs";
import {AnimationsManager} from "../modules/animations";
import {TemplateManager} from "../modules/template";


export default class ModalBuilder extends Builder implements IModalBuilder {
//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    protected _implicitClass: IModal;

    constructor(modal: IModal) {
        super(modal);
    }

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------

    public build(): IModal {
        this._setAnimations();
        this._setTemplate();

        return this._implicitClass;
    }

//----------------------------------------------------------------------
// Private methods
//----------------------------------------------------------------------
    private _setAnimations(): void {
        /* For the moment, we don't need to retrieve AnimationsManager through a builder because
           the class is not complex (yet) */
        const animationsManager = new AnimationsManager();
        this._implicitClass.setAnimationsManager(animationsManager);
    }

    private _setTemplate(): void {
        const templateManager = new TemplateManager();
        this._implicitClass.setTemplateManager(templateManager);
    }
}