import axios from "axios";

const API = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: process.env.API_AUTH_TOKEN,
  },
});

export default API;
