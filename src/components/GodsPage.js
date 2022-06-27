import React, { useState } from "react";
import GodCard from "./GodCard";
import Form from "./Form";

function GodsPage({ gods, setGods, setSearch, renderFilteredGods }) {
  const baseURL = ` http://localhost:3004/gods`;
  const handleDeleteGod = async (id) => {
    const updatedGodsArray = gods.filter((god) => god.id !== id);
    setGods(updatedGodsArray);
    console.log("delete");
    const deleteMethod = {
      method: "DELETE",
    };
    await fetch(baseURL + `/${id}`, deleteMethod);
    // excludes only the one with the id we are passing in from returned array
  };

  const renderGods = renderFilteredGods.map((god) => (
    <GodCard handleDeleteGod={handleDeleteGod} god={god} key={god.id} />
  ));

  const [searchInput, setSearchInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submit");
    setSearch(searchInput);
  }

  function sortGods() {
    const newArrayofSortedGods = [...gods];
    newArrayofSortedGods.sort((a, b) => {
      const godA = a.name;
      const godB = b.name;

      if (godA < godB) {
        return -1;
      }
      if (godA > godB) {
        return 1;
      }
      return 0;
    });
    return newArrayofSortedGods;
  }

  const handleSort = () => {
    setGods(sortGods());
  };

  return (
    <div>
      <Form gods={gods} setGods={setGods} />
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          type="text"
          id="search"
          placeholder="search a God"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type="submit">Find God🔍</button>
      </form>

      <button onClick={handleSort}>Sort</button>
      <ul className="cards">{renderGods}</ul>
    </div>
  );
}
export default GodsPage;
