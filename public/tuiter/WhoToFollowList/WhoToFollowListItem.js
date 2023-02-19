const WhoToFollowListItem = (who) => {
    return (`
    <div class="list-group-item pt-2 pb-2 ps-3">
        <img class="float-left avatar-image"
            src="${who.avatarIcon}">
        <button class="float-right me-3 mt-1 width-23-percent standard-button bg-primary" type="button">
            Follow
        </button>
        <div>
            <span class="ps-3 float-left"><b>${who.userName}</b></span>
            <i class="fa fa-check-circle ps-1 pt-1 float-left"></i><br>
            <span class="ps-3">@${who.handle}</span>
        </div>
    </div>
    `)
}

export default WhoToFollowListItem;