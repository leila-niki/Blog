import axios from "../api/ axiosInstance";
import { ENDPOINTS } from "../api/endpoints";

export const getPosts = () => axios.get(ENDPOINTS.POSTS);
