import React from "react";
import TokenItemImage from "./TokenItemImage.jsx";
import "./TokenItem.css";

export default ({ token, onClick }) => {
  return (
    <div className="TokenItem" onClick={onClick}>
      <div className="TokenItem-image_wrapper">
        <TokenItemImage outer={token[0]} inner={token[1]} />
      </div>
      <div className="TokenItem-label">{`${token[0]} – ${token[1]}`}</div>
    </div>
  );
};
