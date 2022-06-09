import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Form from "./Form";
import Home from "./Home";
import GodsPage from "./GodsPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/gods" element={<GodsPage />} />
      </Routes>
    </div>
  );
}

export default App;
