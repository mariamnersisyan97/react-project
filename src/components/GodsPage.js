import React, { useState, useEffect } from "react";

import GodCard from "./GodCard";
import Form from "./Form";

function GodsPage() {
  const baseURL = ` http://localhost:3004/gods`;
  const [gods, setGods] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGods);
  }, []);
  const renderGods = gods.map((god) => <GodCard god={god} key={god.id} />);
  //move gods up
  return (
    <div>
      <Form gods={gods} setGods={setGods} />
      <ul className="cards">{renderGods}</ul>
    </div>
  );
}
export default GodsPage;
