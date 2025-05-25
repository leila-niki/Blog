import axios from "./axiosUnstance";

export const getCommentsByPostId = (id) => axios.get(`/blog/posts/${id}/comments`);

export const postNewComment = (id, data) => axios.post(`/blog/posts/${id}/comments`, JSON.stringify(data), {
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    },
});