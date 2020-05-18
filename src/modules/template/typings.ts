export type OptionsTemplateManager = {
    /* Main CSS class name of the modal */
    className?: string;

    /* CSS class name of the close button of the modal */
    closeButtonClassName?: string;

    /* Unparsed content of the template */
    content?: string;

    /* Data injected in the content of the template */
    data?: object;

    /* CSS class name added to the modal when it is opened */
    openClassName?: string;

    /* HTML tag of the parent of modal */
    parentTagName?: string;

    /* HTML tag of the template */
    tagName?: string;

    /* CSS class name of the template's wrapper */
    wrapperClassName?: string;
}