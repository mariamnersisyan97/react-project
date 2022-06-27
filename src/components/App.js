import React from "react";
import About from "./About";
import Navbar from "./Navbar";
import Home from "./Home";
import GodsPage from "./GodsPage";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {
  const baseURL = ` http://localhost:3004/gods`;
  const [gods, setGods] = useState([]);

  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGods);
  }, []);

  const filteredGods = gods.filter((god) => {
    god.name.toLowerCase().includes(search) ||
      god.power.toLowerCase().includes(search);
    return god;
  });

  const renderFilteredGods = filteredGods.filter((god) => {
    if (god !== "") {
      return filteredGods;
    } else {
      return gods;
    }
  });

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route
          exact
          path="/gods"
          element={
            <GodsPage
              renderFilteredGods={renderFilteredGods}
              gods={gods}
              setGods={setGods}
              search={search}
              setSearch={setSearch}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
