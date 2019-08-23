import axios from "axios";
// import backupJson from "./backupJson";

axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

export async function search(query) {
  try {
    const { data } = await axios.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: process.env.REACT_APP_YT_KEY1,
        q: query,
        type: "video"
      }
    });

    return data;
    // return backupJson;
  } catch (error) {
    console.error(error);
    return false;
  }
}
