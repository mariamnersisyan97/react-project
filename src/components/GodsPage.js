import React, { useState, useEffect } from "react";
import GodList from "./GodList";
import Form from "./Form";

function GodsPage() {
  const baseURL = ` http://localhost:3004/gods`;
  const [gods, setGods] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGods);
  }, []);
  //move gods up
  return (
    <div>
      <Form gods={gods} setGods={setGods} />
      <GodList gods={gods} />
    </div>
  );
}
export default GodsPage;
