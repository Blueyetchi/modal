import {TemplateManagerOptionsConstructor} from "../typings";

export default interface ITemplateManager {

    /* Add class on modal when it is opened */
    addOpenClass(): void;

    /* Override default value of TemplateManager's properties */
    fillOptions(options: TemplateManagerOptionsConstructor): void;

    /* Return the buttonClose in HTML Element format */
    getHtmlButtonCLose(): HTMLElement;

    /* Return the template parsed in HTML Element format */
    getHtmlTemplate(): HTMLElement;

    /* Return the parent of the template with HTML Element format */
    getHtmlParent(): HTMLElement;

    /* Return the main class of the template */
    getClassName(): string;

    /* Return the class name of the close button */
    getButtonCloseClassName(): string;

    /* Remove class on modal when it is opened */
    removeOpenClass(): void;
}