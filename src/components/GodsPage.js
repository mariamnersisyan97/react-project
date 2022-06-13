import React, { useState, useEffect } from "react";
import GodCard from "./GodCard";
import Form from "./Form";
import Search from "./Search";

function GodsPage({
  gods,
  setGods,
  handleSearch,
  search,

  baseURL,
}) {
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

  //move gods up

  return (
    <div>
      <Form gods={gods} setGods={setGods} search={search} />
      <Search onSearch={handleSearch} />
      <ul className="cards">{renderGods}</ul>
    </div>
  );
}
export default GodsPage;
