import axios from "axios";

const baseURL =
  "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1";

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use((config) => ({
  ...config,
  params: { ...config.params, apikey: process.env.REACT_APP_API_KEY },
}));

export default axiosInstance;
