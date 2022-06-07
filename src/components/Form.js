import React, { useState } from "react";

const baseURL = `http://localhost:3004/gods/`;

const newGod = {
  name: "",
  power: "",
  url: "",
  likes: 0,
};

function Form({ setGods }) {
  const [addGod, setAddGod] = useState(newGod);
  const handleChange = (e) => {
    console.log(e.target.value);
    setAddGod((updatedGodsList) => ({
      ...updatedGodsList,
      [e.target.name]: e.target.value,
    }));
    console.log(addGod);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newGod),
    })
      .then((response) => response.json())
      .then((data) => setAddGod((currentGods) => [...currentGods, data]));
  };
  return (
    <div className="new-god-form">
      <h2> New God</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={newGod.name}
          type="text"
          name="name"
          placeholder="God Name"
          onChange={handleChange}
        />
        <input
          value={newGod.power}
          type="text"
          name="power"
          placeholder="Power"
          onChange={handleChange}
        />
        <input
          value={newGod.url}
          type="text"
          name="url"
          placeholder="Image URL"
          onChange={handleChange}
        />
        <button type="submit">Add God</button>
      </form>
    </div>
  );
}
// need state to make this a controlled form. Need a value to set it to the state.
export default Form;
