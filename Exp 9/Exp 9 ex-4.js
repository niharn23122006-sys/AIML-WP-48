import React from "react";

function App() {
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  );
}

export default App;