import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService } from "../../services/postsService";
import Input from "../input/Input";
import Button from "../button/Button";

const Login = () => {

    const [formData, setFormData] = useState({
        username:"",
        password:""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name, value} = e?.target;
        setFormData((state) => {
            return{
                ...state,
                [name]: value,
            }
        })
    }

    const handleSubmit = () => {
        loginService(formData)
        .then(({data}) => {
            localStorage.setItem("token", data?.access_token);
            navigate("/");
        });
    }

    return(
        <div className="flex flex-col">
            <Input className="w-2/5 my-2" type="text" name="username" value={formData?.username} onChange={handleChange} placeholder="نام"/>
            <Input className="w-2/5 my-2" type="text" name="password" value={formData?.password} onChange={handleChange} placeholder="پسورد"/>
            <Button className="w-[100px] my-2" onClick={handleSubmit}>ورود</Button>
        </div>
    )
}

export default Login;