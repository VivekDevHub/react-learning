import axios from 'axios';

let axiosInstance;

export default axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (err) => {
    console.log(err);
    return Promise.reject(err);
  },
);
