import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "https://www.pngkey.com/png/detail/13-139837_tesla-motors-logo-png.png",
        }
    }
) => {
    return (
        <li className="list-group-item pt-2 pb-2 ps-3 width-full">
            <img src={post.image} alt="" className="small-gray-text explore-small-image float-right"></img>
            <div>
                {post.userName !== '' ? <span>{post.userName} . {post.time}</span> : ''}
                <br></br>
                <span><b>{post.topic}</b></span>
                {post.title !== '' ? <div className="width-70-percent">{post.title}</div> : ''}
            </div>
        </li>
    );
};
export default PostSummaryItem;
