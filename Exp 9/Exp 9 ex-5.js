import React, { useState } from "react";

function App() {
  const [users] = useState([
    { id: 1, name: "nihar", email: "nihar2312@gmail.com" },
    { id: 2, name: "krishna", email: "krishna786@gmail.com" },
    { id: 3, name: "viraj", email: "viraj69@gmail.com" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;