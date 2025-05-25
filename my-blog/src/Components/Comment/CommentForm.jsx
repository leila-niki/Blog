
import Form from "../form/Form";

const CommentForm = ({inputValue, handleChange, replyComment, handleSubmit}) => {

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