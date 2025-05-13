import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const userId = localStorage.getItem("accessToken");
  if (userId) {
    config.headers["userId"] = userId;
  }
  return config;
});

export default axiosInstance;
