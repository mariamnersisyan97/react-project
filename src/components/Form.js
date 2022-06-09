import React, { useState } from "react";

const baseURL = `http://localhost:3004/gods/`;

function Form({ gods, setGods }) {
  const [god, setGod] = useState({
    name: "",
    power: "",
    url: "",
    likes: 0,
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setGod((god) => ({
      ...god,
      [e.target.name]: e.target.value,
    }));
    console.log(god);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(god),
    })
      .then((response) => response.json())
      .then((data) => {
        const newGods = [...gods, data];
        setGods(newGods);
      })
      //  setGod((gods) => [...gods, data]))
      .catch((error) => console.error("Unable to get gods.", error));
  };
  return (
    <div className="new-god-form">
      <h2> New God</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={god.name}
          type="text"
          name="name"
          placeholder="God Name"
          onChange={handleChange}
        />
        <input
          value={god.power}
          type="text"
          name="power"
          placeholder="Power"
          onChange={handleChange}
        />
        <input
          value={god.url}
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
