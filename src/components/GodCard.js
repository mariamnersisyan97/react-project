import React, { useState } from "react";

function GodCard({ god, handleDeleteListing }) {
  const { name, power, symbol, father, mother, url, likes } = god;
  const [count, setCount] = useState(likes);

  const incrementLikes = () => {
    let newCount = count + 1;
    setCount(newCount);
  };

  return (
    <li className="god-card">
      <h4>{god.name}</h4>
      <img src={url} alt={name} />
      <p>Power: {power}</p>
      <p>Symbol: {symbol}</p>
      <p>
        Mother: {mother}
        <br />
        Father: {father}
      </p>
      <button onClick={incrementLikes}>
        ❤️ Likes:
        {count}
      </button>
      <button onClick={handleDeleteListing}> 🗑️ </button>
    </li>
  );
}
export default GodCard;
