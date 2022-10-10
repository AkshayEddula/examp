import React from "react";
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import "./css/App.css";
import { useState } from "react";
import { Form } from "./components/Form";

export const App = () => {
  const [showform, Setform] = useState(false);
  const [initValue, SetValue] = useState("");
  const [initdate, Setdate] = useState("");
  const [tasks, Settasks] = useState([]);
  const [noinput, setInput] = useState(false);

  // Key
  const id = Math.floor(Math.random() * 1000) + 1;

  // Delete Task

  const deleteTask = (id) => {
    Settasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    Settasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Form Shower
  const onClick = () => {
    Setform(!showform);
  };

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (initValue.length == 0 || initdate.length == 0) {
      setInput(true);
    } else {
      setInput(false);
      Settasks([
        ...tasks,
        { id: id, text: initValue, day: initdate, reminder: true },
      ]);
      SetValue("");
      Setdate("");
    }
  };
  // changeHandler
  const changeHandler = (e) => {
    SetValue(e.target.value);
  };

  // dateHandler
  const dateHandler = (e) => {
    Setdate(e.target.value);
  };
  return (
    <div className="container">
      <Header onClick={onClick} showform={showform} />
      {showform ? (
        <Form
          noinput={noinput}
          initValue={initValue}
          initdate={initdate}
          dateHandler={dateHandler}
          changeHandler={changeHandler}
          submitHandler={submitHandler}
        />
      ) : (
        ""
      )}
      {tasks.length > 0 ? (
        <Tasks onToggle={toggleReminder} onDelete={deleteTask} tasks={tasks} />
      ) : (
        <h2 style={{ margin: "0px", padding: "10px 20px" }}>No Tasks</h2>
      )}
    </div>
  );
};
