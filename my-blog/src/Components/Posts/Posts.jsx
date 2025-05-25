import { useEffect, useState } from "react";
import {getPosts} from "../../services/postsService";
import Loading from "../loading/Loading";
import AddPost from "../addPost/AddPost";
import PostCard from "./PostCard";




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
                <PostCard key={post.id} {...post}/>
            ))}
        </div>
    )
}

export default Posts;