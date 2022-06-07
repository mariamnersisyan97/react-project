import React from "react";

function GodCard({ god }) {
  const { name, power, symbol, father, mother, url } = god;
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
    </li>
  );
}
export default GodCard;
