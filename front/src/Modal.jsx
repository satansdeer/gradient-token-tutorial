import React from "react";
import { inject, observer } from "mobx-react";
import "./Modal.css";

export default inject("modalStore")(
  observer(({ modalStore: { modal, closeModal } }) => {
    return modal.show ? (
      <div className={`Modal-backdrop ${modal.show && "is-visible"}`}>
        <div className="Modal">
          {modal.body}
          <button className="Modal-close_button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    ) : null;
  })
);
