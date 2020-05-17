import {AnimationsOptionsSetup} from "../../modules/animations/typings";
import {TemplateManagerOptionsConstructor} from "../../modules/template/typings";

export default interface IFacadeModal {
    /* Facade method to custom the animations of the modal */
    animations(options: AnimationsOptionsSetup): this;

    /* Facade method to retrieve the class of the modal */
    className(): string;

    /* Facade method to retrieve the content in HTML Element format */
    htmlContent(): HTMLElement;

    /* Open the modal */
    open(): void;

    /* Force to close the modal */
    close(): void;

    /* Facade method to custom the template of the modal */
    template(options: TemplateManagerOptionsConstructor): this;

}