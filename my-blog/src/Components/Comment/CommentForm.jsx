import { useEffect, useState } from "react";
import { postNewComment } from "../../services/postsService";
import { useParams } from "react-router";
import { convertDateToPersion } from "../../utils/helper";
import Input from "../input/Input";
import Form from "../form/Form";

const CommentForm = ({inputValue, handleChange, replyComment, handleSubmit}) => {
    // const {id} = useParams();
      
    // const [isLoading, setIsLoading] = useState(false)
    // const [error, setError] = useState("");


    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setInputValue((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // }
    

    // const handleSubmit = () => {
    //     setLoading(true);
    //     AddCommentService(id,  {...inputValue, date: convertDateToPersion(), parent_id: replyComment})
    //     .then((response) => response.json())
    //     .then((result) => {
    //         setComments((state) => {
    //             return[
    //                 ...state,
    //                 result
    //             ]
    //         });
    //         setLoading(false);
    //         setInputValue({
    //             author: "",
    //             body:""
    //         });
    //         setShowReplyForm(null)
    //     }
    //     )
        // setIsLoading(true);
        // postNewComment(id,{...newComment, date: convertDateToPersion(), parent_id: replyComment})
        // .then((response) => console.log("response",response))

        // try{
        //     const response = await ;
        //     console.log(response)

        // }catch (err){
        //     console.log("Error fetching post:", err);
        //     setError("Something went wrong")
        // }finally {
        //     setIsLoading(false)
        // }
        
    // }

    return(
        <Form 
            inputName="author"
            textareaName="body"
            title={replyComment ? "پاسخ به کامنت" : "ارسال کامنت"}
            inputValue={inputValue?.author}
            body={inputValue?.body}
            inputPlaceholder="نام شما"
            textareaPlaceholder="متن کامنت"
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CommentForm;