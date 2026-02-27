import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData("Sample Data Loaded Successfully!");
    }, 2000);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Simulation</h2>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;