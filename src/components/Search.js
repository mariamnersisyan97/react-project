import React, { useState } from "react";

function Search({ handleSearch, gods, search }) {
  const [input, setInput] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(input);
  }
  // const filteredGods = gods.filter((god) => {
  //   return god.name.toLowerCase().includes(search.toLowerCase());
  // });

  // const newGods = filteredGods.map((godObj) => {
  //   return <GodCard key={godObj} god={godObj} />;
  // });

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search a God"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Find God🔍</button>
    </form>
  );
}

export default Search;
