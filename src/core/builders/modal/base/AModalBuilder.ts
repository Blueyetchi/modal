import IBuilder from "../../IBuilder";
import {IModal} from "../../../../modules/modal/defs";
import {Modal} from "../../../../modules/modal";
import {OptionsModal} from "../../../../modules/modal/typings";

/**
 * @abstract Abstract class for modal builders
 *
 * Contract for ModalBuilder class
 *
 * We make the choice to use an abstract class instead of interface to anticipate
 * the case of different representations of modal in the future. In this way,
 * this abstract class force the shape of potentially other builders.
 *
 */
export default abstract class AModalBuilder implements IBuilder {

    /******************************************************************************* | Properties
     * @desc Implicit class modal instance
     */
    protected _modal: IModal;

    /**
     * @desc Builder options to build the modal
     */
    protected _builderOptions: OptionsModal;

    /******************************************************************************* | Abstract methods
     * @desc Build animation manager of the modal
     */
    protected abstract buildAnimationManager(): void;

    /**
     * @desc Build event manager of the modal
     */
    protected abstract buildEventManager(): void

    /**
     * @desc Build template manager of the modal
     */
    protected abstract buildTemplateManager(): void;

    /**
     * @desc Subscribe observers to observable
     */
    protected abstract initObservable(): void;

    /**
     * @desc Setter for _builderOptions property
     */
    public abstract setBuilderOptions(options?: OptionsModal): void;

    /******************************************************************************* | Public methods
     * @desc Trigger the build process and return the construct implicit class
     *
     * In this case, we could have delegate the build process to another method
     * or class. But it is not complex enough
     *
     */
    public build(): IModal {
        this.buildAnimationManager();
        this.buildTemplateManager();
        this.buildEventManager();
        this.initObservable();

        return this._modal;
    }

    /**
     * @desc Reset the property _modal & _builderOptions
     */
    public resetImplicitClassInstance(): void {
        this._modal = new Modal();
        this._builderOptions = {};
    }
}