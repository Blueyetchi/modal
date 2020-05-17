import {Builder} from "./abstracts";
import {IModal, IModalBuilder} from "./defs";
import {AnimationsManager} from "../modules/animations";
import {TemplateManager} from "../modules/template";

/**
 * This class build the Modal given in parameter to the FacadeModal
 * It manages default implementation of Modal :
 * - Instance class dependencies (TemplateManager, AnimationsManager)
 * - Setup default animations on open and on close
 */
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
        this._setAnimationsManager();
        this._setTemplateManager();

        return this._implicitClass;
    }

//----------------------------------------------------------------------
// Private methods
//----------------------------------------------------------------------
    private _setAnimationsManager(): void {
        /* For the moment, we don't need to retrieve AnimationsManager through a builder because
           the class is not complex (yet) */
        const animationsManager = new AnimationsManager();
        this._implicitClass.setAnimationsManager(animationsManager);
        this._setDefaultAnimation();
    }

    private _setTemplateManager(): void {
        const templateManager = new TemplateManager();
        this._implicitClass.setTemplateManager(templateManager);
    }

    private _setDefaultAnimation(): void {
        this._implicitClass.getAnimationsManager().register('open', function (data) {
            data.modal.classList.add('is-open');
        });

        this._implicitClass.getAnimationsManager().register('close', function (data) {
            data.modal.classList.remove('is-open');
        });
    }
}