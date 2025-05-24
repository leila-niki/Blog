import { useState, useEffect } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';
import { SignUpService, GetConfirmationForUserName } from '../../services/postsService';
import { useNavigate } from 'react-router';

const SignUp = () => {

    const [formData, setFormData] = useState({
        username:"",
        password:"",
        confirmPassword:"",
        email:""
    });
    const [validation, setValidation] = useState({});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((state) => {
            return {
                ...state,
                [name] : value
            }
        });

        if(name === "username"){
            GetConfirmationForUserName(value)
            .then((result) => {
                if(result?.status === 404){
                    setValidation({
                        [name]: result?.message
                    })
                }
            })
            .catch((error) => {
                console.error("Error fetching username confirmation:", error);
                setValidation({
                    [name]: "خطا در بررسی نام کاربری"
                });
            });
        }

        if(name === "confirmPassword"){
            if(formData?.password === value){
                setValidation({
                    [name] : "تا این جا درست است"
                })
            }else{
                setValidation({
                    [name]: "مقدار وارد شده صحیح نیست"
                })
            }
        }

        if(name === "email"){
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) {
                setValidation({
                    [name] : "ایمیل معتبر نیست"
              })
            }else{
                setValidation({
                    [name]: ""
                })
            }
        }

    };

    const handleSubmit = () => {
        SignUpService({...formData, title: "signup"})
        .then(({data}) => {
            alert("ثبت نام با موفقیت انجام شد");
            navigate("/login");
        })
        .catch(({response}) => {
            alert(response?.data?.message || "خطا در ثبت نام");
            if(response?.data?.message === "این نام کاربری قبلا در سیستم ثبت شده است."){
                navigate("/login");
            }

        });

    };

    const isFormValid = formData?.username && 
    formData?.password &&
    formData?.confirmPassword &&
    formData?.email;

    return(
        <div className='flex flex-col'>
            <Input className="w-2/5 my-2" type="text" name="username" value={formData?.username} onChange={handleChange} placeholder="نام"/>
            {validation?.username !== "" && <p className="validation">{validation?.username}</p>}

            <Input className="w-2/5 my-2" type="text" name="password" value={formData?.password} onChange={handleChange} placeholder="پسورد"/>
            <Input className="w-2/5 my-2" type="text" name="confirmPassword" value={formData?.confirmPassword} onChange={handleChange} placeholder="تایید پسورد"/>
            {validation?.confirmPassword !== "" && <p className="validation">{validation?.confirmPassword}</p>}

            <Input className="w-2/5 my-2" type="email" name="email" value={formData?.email} onChange={handleChange} placeholder="Email"/>
            {validation?.email !== "" && <p className="validation">{validation?.email}</p>}

            <Button className="w-[100px] my-2" onClick={handleSubmit} disabled={!isFormValid}>ثبت‌ نام</Button>
        </div>
    )

}

export default SignUp;
