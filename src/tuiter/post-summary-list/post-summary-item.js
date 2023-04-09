import React from "react";
const PostSummaryItem = ({ post }) => {
    return (
        <li className="list-group-item pt-2 pb-2 ps-3 width-full">
            <img src={post.image} alt="" className="small-gray-text explore-small-image float-right"></img>
            <div>
                {post.userName !== '' ? <span>{post.userName} . {post.time}</span> : ''}
                <br></br>
                <span><b>{post.topic}</b></span>
                {post.tuit !== '' ? <div className="width-70-percent">{post.tuit}</div> : ''}
            </div>
        </li>
    );
};
export default PostSummaryItem;
