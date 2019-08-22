import React from "react";
import "./App.css";
import List from "./components/List/List";
import Player from "./components/Player/Player";

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(undefined);
  console.log(selectedVideo);
  return (
    <div className="App">
      <div className="main-container">
        <div className="primary-content-container">
          {selectedVideo && <Player video={selectedVideo} />}
        </div>
        <div className="secondary-content-container">
          <List searchQuery="sailing" setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;
