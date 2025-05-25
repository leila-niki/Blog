import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Comment from "../../Components/comment/Comment";
import Post from "../../Components/posts/PostCard";
import Loading from "../../Components/loading/Loading";
import CommentForm from "../../Components/comment/CommentForm";
import { convertDateToPersion } from "../../utils/helper";
import {getPostId} from "../../services/postsService";
import {getCommentsByPostId, postNewComment} from "../../services/commentServices";

const PostPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newComment, setNewComment] = useState({
        author:"",body:""
    });
    const [replyComment, setReplyComment] = useState(null);
    

    useEffect(() => {
        const fetchPostAndComments = async () => {
            try{
                const [postRes, commentsRes] = await Promise.all([
                    getPostId(id),
                    getCommentsByPostId(id)
                ]) ;
                if(postRes?.status === 200 && commentsRes?.status === 200){
                    setPost(postRes?.data);
                    setComments(commentsRes?.data)
                }else{
                    setError("Failed to fetch post");
                }

            }catch(err){
                console.log("Error fetching post:", err);
                setError("Something went wrong")

            }finally {
                setLoading(false);
            }
        }

        fetchPostAndComments()

    },[id]);

    const handleChange = (e) => {
        const {name, value} = e?.target;
        setNewComment(state => {
            return {
                ...state,
                [name]: value,
            }
        })
    };

    const handleSubmit = async(e) => {
        try{
            const response = await postNewComment(id, {...newComment, date: convertDateToPersion(), parent_id: replyComment});
            if(response?.status === 200){
                setComments((prevComments) => [...prevComments, response?.data]);
                setNewComment({author:"", body:""});
                setReplyComment(null);
            }else{
                setError("Failed to submit comment");
            }

        }catch (err){
            console.log("Error submitting comment:", err);
            setError("Something went wrong while submitting your comment.");
        }
    }

    const handleReply = (commentId) => {
        setReplyComment(commentId)
    }

    const nestComments = (parentId = null) =>
        comments
          .filter((c) => c.parent_id === parentId)
          .map((c) => ({
            ...c,
            replies: nestComments(c.id),
          }));
    
    const nested = nestComments();

    if (loading) return <Loading />
    if (error) return <p className="text-red-500">{error}</p>

    return(
        <div className="w-100">
            {post && <Post post={post}/>}
            <h2 className="font-bold text-2xl py-4">نظرات</h2>
            {nested?.length > 0 ? nested?.map((comment) => (
                <Comment 
                    key={comment?.id}
                    comment={comment}
                    replyComment={replyComment}
                    handleReply={handleReply} 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    inputValue={newComment.author}
                    body={newComment.body}
                />
            )) : <p className="text-center py-6">هنوز کامنتی نوشته نشده است!</p>}
            <CommentForm 
                inputValue={newComment} 
                replyComment={replyComment}
                handleChange={handleChange} 
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

export default PostPage;