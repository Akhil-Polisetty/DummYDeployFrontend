import axios from "axios";

const api = axios.create({
  baseURL: "https://duumy-deploy1.vercel.app/api", // adjust as per your backend
  withCredentials: true, // if using cookies/sessions
});

export default api;
