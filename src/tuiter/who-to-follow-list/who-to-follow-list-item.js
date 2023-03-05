import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.png' }
    }
) => {
    return (
        <li className="list-group-item pt-2 pb-2 ps-3">
            <img className="float-left avatar-image" src={who.avatarIcon} alt=""></img>
            <button className="float-right me-3 mt-1 width-20-percent standard-button bg-primary" type="button">
                Follow
            </button>
            <div>
                <span className="ps-3 float-left"><b>{who.userName}</b></span>
                <i className="fa fa-check-circle ps-1 pt-1 float-left"></i><br></br>
                <span className="ps-3">@{who.handle}</span>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;