import React, { Fragment } from "react";
import TokenItem from "./TokenItem";
import TokenView from "./TokenView";
import { inject, observer } from "mobx-react";
import "./TokensList.css";

export default inject("gradientTokenStore", "modalStore")(
  observer(({ gradientTokenStore: { tokens }, modalStore }) => {
    return (
      <Fragment>
        {tokens.length ? (
          <div className="TokensList">
            {tokens.map((token, index) => (
              <TokenItem
                key={index}
                token={token}
                onClick={() =>
                  modalStore.showModal(<TokenView token={token} />)
                }
              />
            ))}
          </div>
        ) : (
          <div className="TokensList-label_empty">You don't have tokens yet.</div>
        )}
      </Fragment>
    );
  })
);
