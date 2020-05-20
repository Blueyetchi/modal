import {ITemplateManager} from "./defs";
import {OptionsTemplateManager} from "./typings";
import {dom} from "../../helpers";
import {EventData} from "../events/typings";

/**
 * @class TemplateManager
 *
 * Manages and creates all template components of the modal
 *
 */
export default class TemplateManager implements ITemplateManager {

    /******************************************************************************* | Properties
     * @desc Main CSS class name of the modal
     */
    private _className: string = 'by-modal';

    /**
     * @desc CSS class name of the close button of the modal
     */
    private _closeButtonClassName: string = 'by-modal-close-button';

    /**
     *  @desc Unparsed content of the template
     */
    private _content: string;

    /**
     * @desc Data injected in the content of the template
     */
    private _data: object = {};

    /**
     * @mounted
     * @desc _htmlCloseButton
     */
    private _htmlCloseButton: HTMLElement;

    /**
     * @mounted
     * @desc Finally HTML element of the modal
     */
    private _htmlModal: HTMLElement;

    /**
     * @mounted
     * @desc HTML parent element of the modal
     */
    private _htmlParent: HTMLElement;

    /**
     * @desc CSS class name added to the modal when it is opened
     */
    private _openClassName: string = 'is-open';

    /**
     * @desc HTML tag of the parent of template
     */
    private _parentTagName: string = 'body';

    /**
     * @desc HTML tag of the modal
     */
    private _tagName: string = 'div';

    /**
     * @desc CSS class name of the template's wrapper
     */
    private _wrapperClassName: string = 'by-modal-wrapper';

    /******************************************************************************* | Constructor
     * @desc Constructor of the class TemplateManager
     */
    constructor(options?: OptionsTemplateManager) {
        if (options) {
            this._initializer(options);
        }
        this._createMountedProperties();
    }

    /******************************************************************************* | Public methods
     * @desc Add a specific CSS class when the modal is open
     */
    public addOpenClassToModal(): void {
        this._htmlModal.classList.add(this._openClassName);
    }

    /**
     * @desc Getter for the CSS class name of the close button
     */
    public getCloseButtonClassName(): string {
        return this._closeButtonClassName;
    }

    /**
     * @desc Getter for the HTML close button element of the modal
     */
    public getHtmlCloseButton(): HTMLElement {
        return this._htmlCloseButton;
    }

    /**
     * @desc Getter for the HTML modal element
     */
    public getHtmlModal(): HTMLElement {
        return this._htmlModal;
    }

    /**
     * @desc Getter for the HTML parent element of the modal
     */
    public getHtmlParentModal(): HTMLElement {
        return this._htmlParent;
    }

    /**
     * @desc Getter for CSS class name of the modal
     */
    public getModalClassName(): string {
        return this._className;
    }

    /**
     * @desc Getter for the CSS class name added to the modal when it is opened
     */
    public getOpenStateClassName(): string {
        return this._openClassName;
    }

    /**
     * @desc Getter for the HTML wrapper element of the modal
     */
    public getWrapperClassName(): string {
        return this._wrapperClassName;
    }

    /**
     * @desc Remove the specific CSS class name added when the modal is opened
     */
    public removeOpenClassModal(): void {
        this._htmlModal.classList.remove(this._openClassName);
    }

    /******************************************************************************* | Private methods
     *
     */

    /**
     * @desc Create HTML close button element of the modal
     */
    private _createHtmlCloseButton(): HTMLElement {
        const modal = document.createElement('div');
        modal.className = this._closeButtonClassName;

        return modal;
    }

    /**
     * @desc Create HTML modal element
     */
    private _createHtmlModal(): HTMLElement {
        /* Build the shell of the modal */
        const modal = document.createElement(this._tagName);
        modal.className = this._className;

        /* Insert the closeButton & wrapper in the shell */
        const wrapper = this._createHtmlWrapperModal();
        modal.appendChild(this._htmlCloseButton);
        modal.appendChild(wrapper);

        return modal;
    }

    /**
     * @desc Create HTML wrapper element of the modal
     */
    private _createHtmlWrapperModal(): HTMLElement {
        const wrapper = document.createElement('div');
        wrapper.className = this._wrapperClassName;
        wrapper.innerHTML = dom.parsedContent(this._content, this._data);

        return wrapper;
    }

    /**
     * @desc Create HTML parent element of the modal
     */
    private _createHtmlParentModal(): HTMLElement {
        return document.querySelector(this._parentTagName);
    }

    /**
     * @desc Create all mounted properties like HTML elements
     *
     * All inner methods need to be called in a specific order because of dependencies
     *
     */
    private _createMountedProperties(): void {
        this._htmlParent = this._createHtmlParentModal();
        this._htmlCloseButton = this._createHtmlCloseButton();
        /* This method needs to be call at the end because it depends of properties beyond */
        this._htmlModal = this._createHtmlModal();
    }

    /**
     * @desc Initialize all properties according to the options values
     */
    private _initializer({
        className,
        closeButtonClassName,
        content,
        data,
        openClassName,
        parentTagName,
        tagName,
        wrapperClassName
    }: OptionsTemplateManager) {
        if (className) this._className = className;
        if (closeButtonClassName) this._closeButtonClassName = closeButtonClassName;
        if (content) this._content = content;
        if (data) this._data = data;
        if (openClassName) this._openClassName = openClassName;
        if (parentTagName) this._parentTagName = parentTagName;
        if (tagName) this._tagName = tagName;
        if (wrapperClassName) this._wrapperClassName = wrapperClassName;
    }
}