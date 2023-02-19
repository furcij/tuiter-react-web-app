const PostSummaryItem = (post) => {
    return (`
    <div class="list-group-item pt-2 pb-2 ps-3 width-full">
        <img src="${post.image}" class="small-gray-text explore-small-image float-right">
        ${post.topic !== '' ? `<div class="small-gray-text">${post.topic}</div>` : ''}
        <div>
            ${post.userName !== '' ? `<span><b>${post.userName}</b></span>` : ''}
            <i class="fa fa-check-circle"></i>
            <span class="small-gray-text"> - ${post.time}</span>
            ${post.title !== ''? `<div class="width-70-percent"><b>${post.title}</b></div>`
            : ''}
            ${post.tuits !== '' ? `<div>${post.tuits} Tuits</div>` : ''}
        </div>
    </div>
    `)
}

export default PostSummaryItem;