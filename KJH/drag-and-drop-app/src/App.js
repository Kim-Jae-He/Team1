// src/App.js
import React from "react";
import List from "./List";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>드래그 앤 드롭 리스트</h1>
      <List />
    </div>
  );
};

export default App;
