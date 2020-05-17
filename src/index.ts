import {FacadeModal, Modal as BareModal, ModalBuilder} from "./core";

/* Here is the logic for dependency injection */

/* We use alias "BareModal" to indicate that the Modal object passed in ModalBuilder is not completely built */
// const modalBuilder = new ModalBuilder(new BareModal());
//const modalBuilt = modalBuilder.build();
// const facadeModal = new FacadeModal(modalBuilder);

export default FacadeModal;