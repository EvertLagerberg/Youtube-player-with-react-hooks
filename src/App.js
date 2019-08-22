import React from "react";
import "./App.css";
import List from "./components/List/List";
import Player from "./components/Player/Player";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <div className="primary-content-container">
          <Player />
        </div>
        <div className="secondary-content-container">
          <List searchQuery="manatee" />
        </div>
      </div>
    </div>
  );
}

export default App;
