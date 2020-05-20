import {AModalBuilder} from "./base";
import {OptionsModal} from "../../../modules/modal/typings";
import {IAnimationManager} from "../../../modules/animations/defs";
import {AnimationManager} from "../../../modules/animations";
import {EventManager} from "../../../modules/events";
import {TemplateManager} from "../../../modules/template";
import constants from "../../../constants";
import {ITemplateManager} from "../../../modules/template/defs";

/**
 * @desc class ModalBuilder
 *
 * Builder for modal
 *
 */
export default class ModalBuilder extends AModalBuilder {

    /******************************************************************************* | Public methods
     * @desc Setter for _builderOptions property
     */
    public setBuilderOptions(options?: OptionsModal): void {
        this._builderOptions = options ? options : {};
    }

    /******************************************************************************* | Protected methods
     * @desc Build animation manager of the modal
     */
    protected buildAnimationManager(): void {
        const animationManager: IAnimationManager = new AnimationManager();
        const optionsAnimationManager = this._builderOptions.animations;
        if (optionsAnimationManager && Object.keys(optionsAnimationManager).length > 0) {
            for (const animationName in optionsAnimationManager) {
                if (optionsAnimationManager.hasOwnProperty(animationName)) {
                    if (Object.values(constants.event.EVENT_TYPE).includes(animationName)) {
                        // @ts-ignore
                        animationManager.register(animationName, optionsAnimationManager[animationName]);
                    }
                }
            }
        }

        this._modal.setAnimationManager(animationManager);
    }

    /**
     * @desc Build event listener manager of the modal
     */
    protected buildEventManager(): void {
        const eventManager = new EventManager();
        this._modal.setEventManager(eventManager);
    }

    /**
     * @desc Build template manager of the modal
     */
    protected buildTemplateManager(): void {
        const optionsTemplateManager = this._builderOptions.template ? this._builderOptions.template : {};
        const templateManager = new TemplateManager(optionsTemplateManager);

        this._modal.setTemplateManager(templateManager);
    }
}