import React, { useState } from "react";

const baseURL = `http://localhost:3004/gods/`;

function Form({ gods, setGods }) {
  const [god, setGod] = useState({
    name: "",
    power: "",
    url: "",
    mother: "",
    father: "",
    symbol: "",
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
        <input
          value={god.mother}
          type="text"
          name="mother"
          placeholder="Mother"
          onChange={handleChange}
        />
        <input
          value={god.father}
          type="text"
          name="father"
          placeholder="Father"
          onChange={handleChange}
        />
        <input
          value={god.symbol}
          type="text"
          name="symbol"
          placeholder="Symbol"
          onChange={handleChange}
        />
        <button type="submit">Add God</button>
      </form>
    </div>
  );
}
export default Form;
