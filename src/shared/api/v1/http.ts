import axios from "axios";
import { getAuthToken } from "../auth-token";

const baseURL = import.meta.env.VITE_API_URL ?? "";

console.log(baseURL);



export const http = axios.create({ baseURL });

http.interceptors.request.use((cfg) => {
  const token = getAuthToken();
  
  if (token !== null) {
    cfg.headers.Authorization = `Bearer ${token}`;
  }

  return cfg;
});

