import axios from "axios";
import { getAuthToken } from "../auth-token";
import { handleUnauthorized } from "../unauthorized";

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

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      handleUnauthorized();
    }

    return Promise.reject(error);
  }
)
