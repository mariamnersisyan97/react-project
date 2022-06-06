import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Form from "./Form";
import Home from "./Home";
import GodList from "./GodList";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/addGod" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
