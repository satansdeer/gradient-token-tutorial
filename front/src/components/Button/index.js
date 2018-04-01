import React from "react";
import "./Button.css";

export default ({ onClick, label, disabled }) => (
  <button onClick={onClick} className={`Button ${disabled && "is-disabled"}`}>
    {label}
  </button>
);
