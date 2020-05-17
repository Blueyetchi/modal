export type TemplateManagerOptionsConstructor = {
    /* Main CSS class of the template */
    className?: string;
    /* CSS class of the close button */
    closeButtonClassName?: string;
    /* Content of the template unparsed */
    content?: string;
    /* Data injected on the content of the template */
    data?: object;
    /* CSS class added to the modal when it is opened */
    openClassName?: string;
    /* Html tag of the parent of template */
    parentTagName?: string;
    /* Html tag of the template */
    tagName?: string;
    /* CSS class of the template's wrapper */
    wrapperClassName?: string;
}