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

    /* Html tag of the parent of template */
    private _parentTagName: string = 'body';

    /* Html tag of the template */
    private _tagName: string = 'div';

    /* HTML Element of the template */
    private _htmlContent: HTMLElement = this._createHtmlContent();

//----------------------------------------------------------------------
// Public methods
//----------------------------------------------------------------------
    public getButtonCloseClassName(): string {
        return this._closeButtonClassName;
    }

    public getClassName(): string {
        return this._className;
    }

    public getHtmlTemplate(): HTMLElement {
        return this._htmlContent;
    }

    public getHtmlParent(): HTMLElement {
        return document.querySelector(this._parentTagName);
    }

    public fillOptions(options: TemplateManagerOptionsConstructor): void {
        this._initializer(options);
        this._htmlContent = this._createHtmlContent();
    }

//----------------------------------------------------------------------
// Private methods
//----------------------------------------------------------------------
    private _initializer({
        className,
        closeButtonClassName,
        content,
        data,
        parentTagName,
        tagName
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
        if (parentTagName) {
            this._parentTagName = parentTagName;
        }
        if (tagName) {
            this._tagName = tagName;
        }
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
        let wrapper = this._createHtmlWrapper();

        wrapper.innerHTML = this._parsedContent();

        return wrapper;
    }

    private _createHtmlWrapper(): HTMLElement {
        let wrapper = document.createElement(this._tagName);
        wrapper.classList.add(this._className);

        return wrapper;
    }

    private _parsedContent(): string {
        const data = this._data;

        return eval('`' + this._content + '`');
    }
}