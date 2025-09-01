import React from "react";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>React + TypeScript + Fetch API</h1>
      <UserList />
    </div>
  );
};

export default App;
