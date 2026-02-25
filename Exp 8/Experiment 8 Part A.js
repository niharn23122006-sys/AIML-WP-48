import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const handleStepChange = (e) => {
    setStep(Number(e.target.value));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter App</h2>

      <input
        type="number"
        value={step}
        onChange={handleStepChange}
      />

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + step)}>Increase</button>
      <button onClick={() => setCount(count - step)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default App;