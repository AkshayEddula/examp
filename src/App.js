import { useState } from "react";
// import { Head } from "./comop/head";

function App() {
  const [initValue, setValue] = useState("Input Text");

  const inputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="App">
      <label htmlFor="name">Name: </label>
      <input onChange={inputChange} type="text" placeholder="name" />
      <h1 id="text">{initValue}</h1>
    </div>
  );
}

export default App;
