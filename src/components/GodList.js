import React from "react";
import GodCard from "./GodCard";

function GodList({ gods }) {
  const renderGods = gods.map((god) => <GodCard god={god} key={god.name} />);
  return <ul className="cards">{renderGods}</ul>;
}
export default GodList;
