import React from "react";
import { inject, observer } from "mobx-react";
import PropTypes from "prop-types";
import Button from "components/Button";
import "./Modal.css";

const Modal = ({ modalStore: { modal, closeModal } }) => {
  return modal.show ? (
    <div className={`Modal-backdrop ${modal.show && "is-visible"}`}>
      <div className="Modal">
        {modal.body}
        <Button onClick={closeModal} label="Close" />
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  modalStore: PropTypes.shape({
    modal: PropTypes.shape({
      show: PropTypes.bool,
      body: PropTypes.object
    }),
    closeModal: PropTypes.func.isRequired
  }).isRequired
};

export default inject("modalStore")(observer(Modal));
