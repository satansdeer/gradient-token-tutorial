import React from "react";
import TokenImage from "components/TokenImage";
import "./TokenItem.css";

export default ({ token, onClick }) => {
  return (
    <div className="TokenItem" onClick={onClick}>
      <div className="TokenItem-image_wrapper">
        <TokenImage outer={token[0]} inner={token[1]} />
      </div>
      <div className="TokenItem-label">{`${token[0]} – ${token[1]}`}</div>
    </div>
  );
};
