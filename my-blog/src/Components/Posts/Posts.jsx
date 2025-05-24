import {getPosts} from "../../services/postsService";
import { useContext, useEffect, useState } from "react";
import Loading from "../Loading";
import Post from "./Post";
import AddPost from "../addPost/AddPost";




const Posts = () => {

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoging, setIsLogging] = useState(localStorage.getItem("token") ? true : false);

    useEffect(() => {
        getPosts()
        .then(response => {
            if(response.status === 200){
                setPosts(response?.data);
                setLoading(false)
            }
        })
        .catch((error) => alert(error));      
    
    },[]);

    return (
        <div className="w-full h-full">
            {isLoging && <AddPost />}
            {loading ? <Loading /> : posts?.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    )
}

export default Posts;