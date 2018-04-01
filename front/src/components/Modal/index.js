import React from "react";
import { inject, observer } from "mobx-react";
import Button from "components/Button";
import "./Modal.css";

export default inject("modalStore")(
  observer(({ modalStore: { modal, closeModal } }) => {
    return modal.show ? (
      <div className={`Modal-backdrop ${modal.show && "is-visible"}`}>
        <div className="Modal">
          {modal.body}
          <Button onClick={closeModal} label="Close" />
        </div>
      </div>
    ) : null;
  })
);
