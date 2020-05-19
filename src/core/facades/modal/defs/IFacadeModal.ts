import {OptionsModal} from "../../../../modules/modal/typings";
import {IModal} from "../../../../modules/modal/defs";

/**
 * @interface IFacadeModal
 *
 * Contract for FacadeModal
 *
 */
export default interface IFacadeModal {

    /**
     * @desc Close the modal
     */
    close(): void;

    /**
     * @desc Init the modal
     */
    init(options?: OptionsModal): IModal;

    /**
     * @desc Open the modal
     */
    open(): void;
}