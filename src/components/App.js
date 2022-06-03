import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Form from "./Form";
import Home from "./Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/about" component={About} />
        <Route exact path="addGod" component={Form} />
        <Route exact path="home" component={Home} />
      </Routes>
    </div>
  );
}

export default App;
