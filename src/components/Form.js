import React from "react";
import "../css/Form.css";

export const Form = ({
  submitHandler,
  initValue,
  initdate,
  dateHandler,
  noinput,
  changeHandler,
}) => {
  const styles = {
    bor: {
      border: noinput ? "1px solid red" : "1px solid black",
    },
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <label htmlFor="task">Enter Task: </label>
        <input
          style={styles.bor}
          value={initValue}
          onChange={changeHandler}
          id="task"
          type="text"
        />
        <label htmlFor="time">Enter Date: </label>
        <input
          style={styles.bor}
          value={initdate}
          onChange={dateHandler}
          type="datetime-local"
          name="datetime"
          id="date"
        />
        <button type="submit">ADD TASK</button>
      </form>
    </div>
  );
};
