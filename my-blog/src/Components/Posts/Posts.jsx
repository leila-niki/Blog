import "./style.css";
import {getPosts} from "../../services/postsService";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import Post from "./Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        getPosts()
        .then(response => {
            if(response.status === 200){
                setPosts(response?.data);
                setLoading(false)
            }
        })
        .catch((error) => alert(error))
    },[]);

    return (
        <div className="posts-list">
            {loading ? <Loading /> : posts?.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Posts;