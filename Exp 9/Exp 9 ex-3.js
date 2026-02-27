import React from "react";

function App() {
  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;