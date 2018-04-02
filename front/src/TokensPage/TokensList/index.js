import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";

import TokenItem from "./TokenItem";
import TokenView from "./TokenView";
import "./TokensList.css";

const TokensList = ({
  gradientTokenStore: { tokens },
  modalStore: { showModal }
}) => {
  return (
    <Fragment>
      {tokens.length ? (
        <div className="TokensList">
          {tokens.map((token, index) => (
            <TokenItem
              key={index}
              token={token}
              onClick={() => showModal(<TokenView token={token} />)}
            />
          ))}
        </div>
      ) : (
        <div className="TokensList-label_empty">You don't have tokens yet.</div>
      )}
    </Fragment>
  );
};

TokensList.propTypes = {
  gradientTokenStore: PropTypes.shape({
    tokens: PropTypes.array
  }),
  modalStore: PropTypes.shape({
    showModal: PropTypes.func
  })
};

export default inject("gradientTokenStore", "modalStore")(observer(TokensList));
