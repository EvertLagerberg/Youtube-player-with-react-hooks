import React from "react";
import "./App.css";
import Search from "./components/Search/Search";
import List from "./components/List/List";
import Player from "./components/Player/Player";
import VideoDetails from "./components/VideoDetails/VideoDetails";

function App() {
  const [selectedVideo, setSelectedVideo] = React.useState(null);
  const [searchQuery, setSearchQuery] = React.useState(null);
  return (
    <div className="App">
      <div className="top-content">
        <Search onSubmit={setSearchQuery} />
      </div>
      <div className="main">
        <div className="primary-content">
          {selectedVideo && <Player video={selectedVideo} />}
          {selectedVideo && <VideoDetails data={selectedVideo.snippet} />}
        </div>
        <div className="secondary-content">
          {searchQuery && (
            <List
              searchQuery={searchQuery}
              setSelectedVideo={setSelectedVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export defau
t App;
