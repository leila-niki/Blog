import { useState } from "react";
import { AddNewPostService } from "../../services/postsService";
import { convertDateToPersion } from "../../utils/helper";
import Form from "../form/Form";
import Button from "../button/Button";
import Input from "../input/Input";
import Textarea from "../textarea/Textarea";

const AddPost = () => {
    const [formData, setFormData] = useState({
        title:"",
        body:""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = () => {
        AddNewPostService({...formData, date: convertDateToPersion()}, localStorage.getItem("token"))
        .then((response) => response.json())
        .then((result) => {
            // dispatch(fetchPosts());
            setFormData({
                title:"",
                body:""
            })
        })
    }


    return(
        <Form 
            title="پست جدید" 
            inputValue={formData?.title} 
            inputName="title"
            body={formData?.body}
            textareaName="body"
            inputPlaceholder="عنوان پست"
            textareaPlaceholder="متن پست"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default AddPost;