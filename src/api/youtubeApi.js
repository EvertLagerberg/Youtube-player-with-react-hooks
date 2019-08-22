import axios from "axios";
import backupJson from "./backupJson";

const API_KEY = "REMOVED";
const API_KEY2 = "REMOVED";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

export async function search(query) {
  try {
    const { data } = await axios.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY,
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
