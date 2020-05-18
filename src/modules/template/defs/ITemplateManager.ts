export default interface ITemplateManager {

    /**
     * @desc Add a specific CSS class when the modal is open
     */
    addOpenClassToModal(): void;

    /**
     * @desc Getter for the CSS class name of the close button
     */
    getCloseButtonClassName(): string;

    /**
     * @desc Getter for the HTML close button element of the modal
     */
    getHtmlCloseButton(): HTMLElement;

    /**
     * @desc Getter for the HTML modal element
     */
    getHtmlModal(): HTMLElement;

    /**
     * @desc Getter for the HTML parent element of the modal
     */
    getHtmlParentModal(): HTMLElement;

    /**
     * @desc Getter for CSS class name of the modal
     */
    getModalClassName(): string;

    /**
     * @desc Getter for the CSS class name added to the modal when it is opened
     */
    getOpenStateClassName(): string;

    /**
     * @desc Getter for the HTML wrapper element of the modal
     */
    getWrapperClassName(): string;

    /**
     * @desc Remove the specific CSS class name added when the modal is opened
     */
    removeOpenClassModal(): void;
}