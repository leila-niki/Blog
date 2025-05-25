import { Link } from "react-router";

const PostCard = ({id, title, body, author, date}) => {
    return(
            <Link to={`/post/${id}`}>
                <div className="container border-b border-gray-200">
                    <h2 className="text-yellow-500 text-2xl py-4">{title}</h2>
                    <p className="text-sm text-slate-500">{`ارسال شده توسط ${author} در تاریخ ${date}`}</p>
                    <p dangerouslySetInnerHTML={{__html: body}} className="prose prose-a:text-red text-base py-3"></p>
                </div>
            </Link>
       
    )
}

export default PostCard;