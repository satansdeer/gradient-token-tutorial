import React from "react";
import TokenItem from "./TokenItem";
import TokenView from "./TokenView";
import { inject, observer } from "mobx-react";
import "./TokensList.css";

export default inject("gradientTokenStore", "modalStore")(
  observer(({ gradientTokenStore: { tokens }, modalStore }) => {
    return (
      <div className="TokensList">
        {tokens.map((token, index) => (
          <TokenItem
            key={index}
            token={token}
            onClick={() => modalStore.showModal(<TokenView token={token} />)}
          />
        ))}
      </div>
    );
  })
);
