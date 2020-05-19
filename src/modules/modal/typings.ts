import {OptionsTemplateManager} from "../template/typings";
import {OptionsAnimationManager} from "../animations/typings";

export type OptionsModal = {
    animations?: OptionsAnimationManager;
    template?: OptionsTemplateManager;
}