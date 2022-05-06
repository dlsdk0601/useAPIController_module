import axios from "axios";

// const BASE_URL = "https://api.coinpaprika.com/v1/";
export const ip = "http://localhost:8080/";
export const baseURL = "http://localhost:8080/";

export const Axios = axios.create({
  baseURL,
  timeout: 1000,
});
