import axios from "./axiosUnstance";

export const getPosts = () => axios.get(`/blog/posts`);
export const getPostId = (id) => axios.get(`/blog/posts/${id}`);
export const getCommentsByPostId = (id) => axios.get(`/blog/posts/${id}/comments`);
export const postNewComment = (id, data) => axios.post(`/blog/posts/${id}/comments`, JSON.stringify(data), {
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    },
});
export const AddNewPostService = (data,token) => axios.post("/blog/posts", {...data}, {
    headers: {
        "Authorization": `Bearer ${token}`
    }
})

export const GetConfirmationForUserName = (username) => axios.get(`/blog/users/${username}`);
export const SignUpService = (data) => axios.post(`/blog/users`, JSON.stringify(data),
{
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    },
}
);
export const loginService = (data) => axios.post(`/blog/sessions`, JSON.stringify(data),{
    headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
    },
});
