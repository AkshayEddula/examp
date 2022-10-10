import React from "react";
import { Button } from "./Button";
import "../css/Header.css";

export const Header = ({ onClick, showform }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {!showform ? (
        <Button onClick={onClick} color="green" text="Add" />
      ) : (
        <Button onClick={onClick} color="red" text="Cancel" />
      )}
    </header>
  );
};
