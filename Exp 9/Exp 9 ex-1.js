import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  // Try different dependency arrays here

  // 1️⃣ No dependency array
  // useEffect(() => {
  //   console.log("Counter Updated");
  // });

  // 2️⃣ Empty dependency array
  // useEffect(() => {
  //   console.log("Runs Only Once");
  // }, []);

  // 3️⃣ Dependency with count
  useEffect(() => {
    console.log("Counter Updated");
  }, [count]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;