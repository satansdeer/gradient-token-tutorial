import React from "react";
import TokensList from "./TokensList";
import Button from "components/Button";
import { inject, observer } from "mobx-react";

export default inject("gradientTokenStore")(
  observer(({ gradientTokenStore: { mintToken, isOwner } }) => {
    return (
      <div style={{ marginTop: 50 }}>
        <h1>Gradient Tokens</h1>
        <Button disabled={!isOwner} onClick={mintToken} label="Mint token" />
        <div
          style={{
            maxWidth: 800,
            margin: "50px auto"
          }}
        >
          <TokensList />
        </div>
      </div>
    );
  })
);
