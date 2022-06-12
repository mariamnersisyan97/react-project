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
  function handleSearch(newSearch) {
    setSearch(newSearch);
    console.log("1");
  }
  // function handleDeleteListing(id) {
  //   const updatedGodsArray = gods.filter((god) => god.id !== id);
  //   setGods(updatedGodsArray);
  //   console.log("delete");
  //   const deleteMethod = {
  //     method: "DELETE",
  //   };
  //   fetch(`http://localhost:3004/gods${id}`, deleteMethod);

  //   // excludes only the one with the id we are passing in from returned array
  // }

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGods);
  }, []);

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
              gods={gods}
              setGods={setGods}
              handleSearch={handleSearch}
              search={search}
              // handleDeleteListing={handleDeleteListing}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
