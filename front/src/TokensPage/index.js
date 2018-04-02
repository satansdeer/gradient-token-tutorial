import React from "react";
import TokensList from "./TokensList";
import Button from "components/Button";
import { inject, observer } from "mobx-react";
import "./TokensPage.css";

export default inject("gradientTokenStore")(
  observer(({ gradientTokenStore: { mintToken, isOwner } }) => {
    return (
      <div className="TokensPage">
        <h1>Gradient Tokens</h1>
        <Button disabled={!isOwner} onClick={mintToken} label="Mint token" />
        <div className="TokensPage-tokens">
          <TokensList />
        </div>
      </div>
    );
  })
);
