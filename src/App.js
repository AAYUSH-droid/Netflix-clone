import React from "react";
import "./App.css";
import HomeScreen from "./HomeScreen";
import { BrowserRouter as Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes> */}
        {/* <Route path="/"> */}
          <HomeScreen />
        {/* </Route> */}
      {/* </Routes> */}
    </div>
  );
}

export default App;
