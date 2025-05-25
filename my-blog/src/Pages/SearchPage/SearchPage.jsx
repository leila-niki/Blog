import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { getPostSearch } from "../../services/postsService";

const SearchPage = () => {
    const [searchParams,setSearchParams] = useSearchParams();
    const [searchPosts, setSearchPosts] = useState([]);

    // const saveToLocalStorage = (query) => {
    //     const queryArr = [];
    //     if(localStorage.getItem("query") !== null){
    //         if(JSON.parse(localStorage.getItem("query"))?.length === 5){
    //             const oldQuery = JSON.parse(localStorage.getItem("query"));
    //             oldQuery.shift();
    //             localStorage.setItem("query", JSON.stringify(oldQuery));
    //         }
    //         queryArr.push(...JSON.parse(localStorage.getItem("query")), query);
    //     }else{
    //         queryArr.push(query);
    //     }
    //     localStorage.setItem("query", JSON.stringify(queryArr));
    // };

    // saveToLocalStorage(searchParams.get("q"));

    useEffect(() => {
        getPostSearch(searchParams.get("q"))
        .then((result) => {
            setSearchPosts(result?.data);
        })
        .catch((error) => {
            console.error("Error fetching search results:", error);
        });

    },[]);

    const highlight = (text) => {
        const q = searchParams.get("q");
        if (!q) return text;
        const parts = text.split(new RegExp(`(${q})`, 'gi'));
        
        return parts.map((part, i) =>
          part.toLowerCase() === q ? <mark key={i} style={{ backgroundColor: 'yellow' }}>{part}</mark> : part
        );
    }

    const filteredPosts = searchParams.get("q") ? searchPosts?.filter((post) => post?.title?.toLowerCase().includes(searchParams.get("q").toLowerCase()) || post?.body?.toLowerCase().includes(searchParams.get("q").toLowerCase())) : searchPosts;

    return(
        <div>
        {
            filteredPosts?.length > 0 ? filteredPosts?.map((post) => (
                <div key={post?.id}>
                    <h2 className="font-bold text-2xl text-yellow-500 my-3">{highlight(post?.title)}</h2>
                    <p className="text-sm text-gray-500 mb-3">{`ارسال شده توسط ${post?.author} در تاریخ ${post?.date} `}</p>
                    <p dangerouslySetInnerHTML={{__html: highlight(post?.body)}}></p>
                    <p >{`تعداد بازدید : ${post?.visits}`}</p>
                </div>
            ))
            : <p>همچین داده ای وجود ندارد!</p>
        }
        </div>
    )
}

export default SearchPage;