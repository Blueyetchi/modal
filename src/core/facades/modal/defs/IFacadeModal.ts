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
     * @desc Init the modal
     */
    init(options?: OptionsModal): IModal;

}