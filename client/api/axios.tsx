import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
    Authorization: process.env.NEXT_PUBLIC_API_AUTH_TOKEN,
  },
});

export default API;
