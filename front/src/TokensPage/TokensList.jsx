import React from "react";
import TokenItem from "./TokenItem.jsx";
import TokenView from "./TokenView";
import Button from "components/Button";
import { inject, observer } from "mobx-react";

export default inject("gradientTokenStore", "modalStore")(
  observer(({ gradientTokenStore: { tokens }, modalStore }) => {
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridGap: "30px 20px"
        }}
      >
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
