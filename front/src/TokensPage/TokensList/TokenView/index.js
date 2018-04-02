import React from "react";
import TokenImage from "components/TokenImage";
import "./TokenView.css";

export default ({ token }) => (
  <div>
    <div className="TokenView-image_wrapper">
      <TokenImage size={200} outer={token[0]} inner={token[1]} />
    </div>
    <div className="TokenView-label">{`${token[0]} – ${token[1]}`}</div>
  </div>
);
