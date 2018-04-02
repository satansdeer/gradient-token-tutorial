import React from "react";
import PropTypes from "prop-types";

import TokenImage from "components/TokenImage";
import "./TokenItem.css";

const TokenItem = ({ token, onClick }) => {
  return (
    <div className="TokenItem" onClick={onClick}>
      <div className="TokenItem-image_wrapper">
        <TokenImage outer={token[0]} inner={token[1]} />
      </div>
      <div className="TokenItem-label">{`${token[0]} – ${token[1]}`}</div>
    </div>
  );
};

TokenItem.propTypes = {
  token: PropTypes.array.isRequired,
  onClick: PropTypes.func
};

export default TokenItem;
