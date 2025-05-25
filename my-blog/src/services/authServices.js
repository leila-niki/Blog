import axios from "./axiosUnstance";

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

export const GetConfirmationForUserName = (username) => axios.get(`/blog/users/${username}`);