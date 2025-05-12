import "./style.css";

const Post = ({post}) => {
    return(
        <div className="post">
            <h2 className="post__header">{post?.title}</h2>
            <p className="post__info">{`ارسال شده توسط ${post?.author} در تاریخ ${post?.date}`}</p>
            <p dangerouslySetInnerHTML={{__html: post?.body}} className="post__content"></p>
        </div>
    )
}

export default Post;