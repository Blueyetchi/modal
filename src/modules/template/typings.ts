export type TemplateManagerOptionsConstructor = {
    /* Main class of the template */
    className?: string;
    /* Class of the close button */
    closeButtonClassName?: string;
    /* Content of the template unparsed */
    content?: string;
    /* Data injected on the content of the template */
    data?: object;
    /* Html tag of the parent of template */
    parentTagName?: string;
    /* Html tag of the template */
    tagName?: string;
}