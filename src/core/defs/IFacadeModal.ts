import {AnimationsOptionsSetup} from "../../modules/animations/typings";
import {TemplateManagerOptionsConstructor} from "../../modules/template/typings";

export default interface IFacadeModal {
    /* Facade method to custom the animations of the modal */
    animations(options: AnimationsOptionsSetup): this;

    /* Facade method to retrieve the class of the modal */
    className(): string;

    /* Force to close the modal */
    close(): void;

    /* Facade method to retrieve the content in HTML Element format */
    htmlContent(): HTMLElement;

    /* It is a hook to inform the system it can set eventListeners and register defaults animations (after the user set
    * the configuration
    */
    init(): this;

    /* Open the modal */
    open(): void;

    /* Facade method to custom the template of the modal */
    template(options: TemplateManagerOptionsConstructor): this;

}