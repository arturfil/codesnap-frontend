import axios from "axios";

export const baseURL = process.env.REACT_APP_API;

const postsApi = axios.create({baseURL});

postsApi.interceptors.request.use(
  async(config) => {
    let jwt_user;
    let token;
    try {
      
    } catch (error) {
      
    }

    return config;
  }
)

export default postsApi;