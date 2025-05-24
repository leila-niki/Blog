import { Link } from "react-router";

const Post = ({post}) => {
    return(
            <Link to={`/post/${post?.id}`}>
                <div className="container border-b border-gray-200">
                    <h2 className="text-yellow-500 text-2xl py-4">{post?.title}</h2>
                    <p className="text-sm text-slate-500">{`ارسال شده توسط ${post?.author} در تاریخ ${post?.date}`}</p>
                    <p dangerouslySetInnerHTML={{__html: post?.body}} className="prose prose-a:text-red text-base py-3"></p>
                </div>
            </Link>
       
    )
}

export default Post;