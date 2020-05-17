import {ITemplateManager} from "./defs";
import {TemplateManagerOptionsConstructor} from "./typings";

export default class TemplateManager implements ITemplateManager{

//----------------------------------------------------------------------
// Properties
//----------------------------------------------------------------------
    /* Main class of the template */
    private _className: string = 'by-modal';

    /* Class of the close button */
    private _closeButtonClassName: string = 'by-modal-close-button';

    /* Content of the template unparsed */
    private _content: string = this._getRandomContentTemplate();

    /* Data injected on the content of the template */
    private _data: object = {};

    /* Html button close of the template */
    private _htmlButtonClose: HTMLElement;

    /* HTML Element of the template */
    private _htmlContent: HTMLElement;

    /* Html tag of the parent of template */
    private _parentTagName: string = 'body';

    /* Html tag of the template */
    private _tagName: string = 'div';

    /* Class of the template's wrapper */
    private _wrapperClassName: string = 'by-modal-wrapper';

    /* Class added to the modal when it is opened */
    private _openClassName: string = 'is-open';


    constructor() {
        /* _htmlButtonClose method needs to be called before _htmlContent one because it use this._htmlButtonClose */
        this._htmlButtonClose = this._createHtmlCloseButton();
        this._htmlContent = this._createHtmlContent();
    }

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    public addOpenClass(): void {
        this._htmlContent.classList.add(this._openClassName);
    }

    public getButtonCloseClassName(): string {
        return this._closeButtonClassName;
    }

    public getClassName(): string {
        return this._className;
    }

    public getHtmlButtonCLose(): HTMLElement {
        return this._htmlButtonClose;
    }

    public getHtmlTemplate(): HTMLElement {
        return this._htmlContent;
    }

    public getHtmlParent(): HTMLElement {
        return document.querySelector(this._parentTagName);
    }

    public fillOptions(options: TemplateManagerOptionsConstructor): void {
        this._initializer(options);
    }

    public removeOpenClass(): void {
        this._htmlContent.classList.remove(this._openClassName);
    }

//----------------------------------------------------------------------
// Private methods
//----------------------------------------------------------------------
    private _initializer({
        className,
        closeButtonClassName,
        content,
        data,
        openClassName,
        parentTagName,
        tagName,
        wrapperClassName
    }: TemplateManagerOptionsConstructor = {}): void {
        if (className) {
            this._className = className;
        }
        if (closeButtonClassName) {
            this._closeButtonClassName = closeButtonClassName;
        }
        if (content) {
            this._content = content;
        }
        if (data) {
            this._data = data;
        }
        if (openClassName) {
            this._openClassName = openClassName;
        }
        if (parentTagName) {
            this._parentTagName = parentTagName;
        }
        if (tagName) {
            this._tagName = tagName;
        }
        if (wrapperClassName) {
            this._wrapperClassName = wrapperClassName;
        }

        this._htmlButtonClose = this._createHtmlCloseButton();
        this._htmlContent = this._createHtmlContent();
    }

    private _getRandomContentTemplate(): string {
        const contents: string[] = [
            '<div>Keep moving forward !</div>',
            '<div>If not, you will become a great developer !</div>',
            '<div>This modal seems work great !</div>'
        ];

        return contents[Math.floor(Math.random() * contents.length)];
    }

    private _createHtmlContent(): HTMLElement {
        let modalHtml = document.createElement('div');
        modalHtml.classList.add(this._className);
        let wrapper = this._createHtmlWrapper();

        modalHtml.appendChild(this._htmlButtonClose);
        modalHtml.appendChild(wrapper);

        return modalHtml;
    }

    private _createHtmlWrapper(): HTMLElement {
        let wrapper = document.createElement('div');
        wrapper.classList.add(this._wrapperClassName);
        wrapper.innerHTML = this._parsedContent();

        return wrapper;
    }

    private _createHtmlCloseButton(): HTMLElement {
        let closeButton = document.createElement('div');
        closeButton.classList.add(this._closeButtonClassName);

        return closeButton;
    }

    private _parsedContent(): string {
        const data = this._data;

        return eval('`' + this._content + '`');
    }
}