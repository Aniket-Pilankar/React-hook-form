import React from "react";
import "./App.css";
import One from "./ControlledComponent/One";
import Three from "./ControlledComponent/Three";
import Two from "./ControlledComponent/Two";
// import One from "./UncontrolledComponents/One";

function App() {
  return (
    <div className="App">
      {/* Uncoltrolled */}
      {/* <One /> */}

      {/* -------------- Controlled */}
      {/* <One /> */}
      <Two />
      <Three />
    </div>
  );
}

export default App;
