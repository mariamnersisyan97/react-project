import React from "react";
import GodCard from "./GodCard";
import Form from "./Form";
import Search from "./Search";

function GodsPage({ gods, setGods, handleSearch, search }) {
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

  const renderGods = gods.map((god) => (
    <GodCard handleDeleteGod={handleDeleteGod} god={god} key={god.id} />
  ));

  return (
    <div>
      <Form gods={gods} setGods={setGods} search={search} />
      <Search handleSearch={handleSearch} />
      <ul className="cards">{renderGods}</ul>
    </div>
  );
}
export default GodsPage;
