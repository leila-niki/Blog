import axios from "./axiosUnstance";

export const getPosts = () => axios.get(`/blog/posts`);
export const getPostId = (id) => axios.get(`/blog/posts/${id}`);
export const AddNewPostService = (data,token) => axios.post("/blog/posts", {...data}, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
});

export const getPostSearch = (query) => axios.get(`/blog/posts?q=${query}`)

