import {ModalBuilder} from "./core/builders/modal";
import FacadeModal from "./core/facades/modal/FacadeModal";

const modalBuilder = new ModalBuilder();
const facadeModal = new FacadeModal(modalBuilder);

export default facadeModal;

