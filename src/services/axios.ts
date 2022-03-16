import axios from "axios";

const baseURL =
  "https://corsanywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1";

// Set base URL prefix for all HTTP requests
const axiosInstance = axios.create({
  baseURL,
});

// Append at the end of params the API key for all HTTP requests
axiosInstance.interceptors.request.use((config) => ({
  ...config,
  params: { ...config.params, apikey: process.env.REACT_APP_API_KEY },
}));

export default axiosInstance;
