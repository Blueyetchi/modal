import {IModal} from "../modules/modal/defs";
import {DataFunctionAnimation} from "../modules/animations/typings";

/**
 * @desc Create data passed in parameter of FunctionANimation
 */
function createDataFunctionAnimation (modal: IModal): DataFunctionAnimation {
    return {
        modal: modal.getTemplateManager().getHtmlModal(),
        overlay: modal.getTemplateManager().getHtmlModal()
    }
}

export default {
    createDataFunctionAnimation,
}