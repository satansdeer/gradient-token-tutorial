import React from "react";
import Button from "components/Button";
import TokensList from "./TokensList";
import { inject, observer } from "mobx-react";
import "./TokensPage.css";

export default inject("gradientTokenStore")(
  observer(({ gradientTokenStore: { mintToken } }) => {
    return (
      <div className="TokensPage">
        <h1>Gradient Tokens</h1>
        <Button onClick={mintToken} label="Mint token" />
        <div className="TokensPage-tokens">
          <TokensList />
        </div>
      </div>
    );
  })
);
