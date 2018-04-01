import React from "react";
import TokenItem from "./TokenItem.jsx";
import TokenView from "./TokenView";
import Button from "components/Button";
import { inject, observer } from "mobx-react";

export default inject("gradientTokenStore", "modalStore")(
  observer(
    ({ gradientTokenStore: { tokens, mintToken, isOwner }, modalStore }) => {
      return (
        <div style={{ marginTop: 50 }}>
          <h1>Gradient Tokens</h1>
          <Button disabled={!isOwner} onClick={mintToken} label="Mint token" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: "30px 20px",
              maxWidth: 800,
              margin: "50px auto"
            }}
          >
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
        </div>
      );
    }
  )
);
