import {TemplateManagerOptionsConstructor} from "../../modules/template/typings";
import {AnimationsOptionsSetup} from "../../modules/animations/typings";
import {IModal} from "./index";

export default interface IModalBuilder {
    /* Return Modal class built */
    build(): IModal;
}