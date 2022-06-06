import React, { useState, useEffect } from "react";
import GodList from "./GodList";

function GodsPage() {
  const baseURL = ` http://localhost:3004/gods`;
  const [gods, setGods] = useState([]);

  useEffect(() => {
    fetch(baseURL)
      .then((r) => r.json())
      .then(setGods);
  }, []);
  return (
    <div>
      <GodList gods={gods} />
    </div>
  );
}
export default GodsPage;
