import React from "react";
import "../css/Button.css";

export const Button = ({ color, onClick, text }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
