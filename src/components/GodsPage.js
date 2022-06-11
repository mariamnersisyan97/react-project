import React, { useState, useEffect } from "react";
import GodCard from "./GodCard";
import Form from "./Form";
import Search from "./Search";

function GodsPage({ gods, setGods, handleSearch, search }) {
  const handleDelete = () => {
    console.log("deleted");
  };
  const renderGods = gods.map((god) => (
    <GodCard handleDelete={handleDelete} god={god} key={god.id} />
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
