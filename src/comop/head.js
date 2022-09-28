import React from "react";
import "../css/head.css";

export const Head = () => {
  return (
    <div className="head">
      <div className="con1">
        <h1>TODO APP</h1>
      </div>
      <div className="con2">
        <input type="text" />
        <button type="submit">ADD TASK</button>
      </div>
    </div>
  );
};
