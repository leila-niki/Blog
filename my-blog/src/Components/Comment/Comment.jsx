import Button from "../button/Button";
import CommentForm from "./CommentForm";

const Comment = ({comment, inputValue, replyComment, handleReply, handleChange, handleSubmit}) => {

    return(
        <div className="w-100 py-1 px-3 border border-Zinc-700 rounded-xl my-3">
            <p className="py-1">
                <span className="inline-block text-base">{comment?.author}</span>
                <span className="inline-block pr-3 text-xs text-gray-500">{comment?.date}</span>
            </p>
            <p className="w-full py-3">{comment?.body}</p>
            {comment?.replies?.map((data) => (
                <Comment key={comment?.id} comment={data} handleReply={handleReply} handleChange={handleChange} handleclick={handleSubmit} inputValue={inputValue} replyComment={replyComment}/>
            ))}
            {replyComment && replyComment === comment?.id ? 
            <CommentForm 
                inputValue={inputValue}
                replyComment={replyComment} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            /> : <Button className="mb-3" onClick={() => handleReply(comment?.id)}>پاسخ</Button>}
        </div>
    )
}

export default Comment;