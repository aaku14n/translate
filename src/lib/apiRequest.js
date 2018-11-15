import axios from "axios";

const API_ROOT_URL = "http://localhost:3000/";
const API_KEY = "&appid=828a7f789fa0d9c17339483615f573da";

export async function get(url) {
  return await axios.get(`${API_ROOT_URL}${url}`);
}
export async function post(url, body) {
  return await axios.post(`${API_ROOT_URL}${url}`, { ...body });
}
