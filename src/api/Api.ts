import axios from "axios";

const postsApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

postsApi.interceptors.request.use(
  async(config) => {
    return new Promise(resolve => setTimeout(() => resolve(config), 1000)) 
  }
)

export default postsApi;

