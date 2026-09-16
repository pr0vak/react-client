import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "";

console.log(baseURL);

export const http = axios.create({ baseURL });
