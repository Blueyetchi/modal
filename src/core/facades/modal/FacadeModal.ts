import {IFacadeModal} from "./defs";
import {AModalBuilder} from "../../builders/modal/base";
import {OptionsModal} from "../../../modules/modal/typings";
import {IModal} from "../../../modules/modal/defs";

export default class FacadeModal implements IFacadeModal {

    /**
     * @desc Modal builder instance
     */
    private _modalBuilder: AModalBuilder;
    private _modal: IModal;

    constructor(modalBuilder: AModalBuilder) {
        this._modalBuilder = modalBuilder;
    }

    public init(options?: OptionsModal): IModal {
        const optionsModal = options ? options : {};
        this._modalBuilder.resetImplicitClassInstance();
        this._modalBuilder.setBuilderOptions(optionsModal);
        this._modal = this._modalBuilder.build();

        return this._modal
    }

}