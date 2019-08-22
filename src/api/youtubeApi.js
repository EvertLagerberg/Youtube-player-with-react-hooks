import axios from "axios";
import backupJson from "./backupJson";

const API_KEY = "REMOVED";
const API_KEY2 = "REMOVED";
axios.defaults.baseURL = "https://www.googleapis.com/youtube/v3/";

const searchInstance = axios.create({
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY2,
    q: "manatee"
  }
});

export async function search(query) {
  try {
    const { data } = await axios.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: API_KEY2,
        q: query
      }
    });
    console.log("here", data);
    return data;
  } catch (error) {
    console.error(error);
    return false;
  }
}
