import React from "react";
import { FaTimes } from "react-icons/fa";
import "../css/Task.css";

export const Task = ({ onToggle, task, onDelete }) => {
  return (
    <div onDoubleClick={() => onToggle(task.id)} className="task">
      <h3 className={`${task.reminder ? "nreminder" : "reminder"}`}>
        {task.text}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p className={`${task.reminder ? "nreminder" : "reminder"}`}>
        {task.day}
      </p>
    </div>
  );
};
