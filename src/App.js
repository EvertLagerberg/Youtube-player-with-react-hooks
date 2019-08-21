import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
// import VideoIframe from "./components/VideoIframe/VideoIframe";
import VideoItemList from "./components/VideoItemList/VideoItemList";
import { search } from "./api/youtubeApi";

function App() {
  // const executeSearch = async () => {
  //   const result = await search("manatee");
  //   console.log(result);
  //   console.log("result");
  //   return result;
  // };

  // const response = executeSearch();

  // console.log("here we are", response);
  return (
    <div className="App">
      <Button />
      <VideoItemList searchQuery="manatee" />
    </div>
  );
}

export default App;
