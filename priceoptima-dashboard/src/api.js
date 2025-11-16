import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Authorization: "Bearer priceoptima_super_secret_12345"
  }
});
