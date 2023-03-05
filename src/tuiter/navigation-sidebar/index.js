import React from "react";
const NavigationSidebar = (
    {
        active = 'explore',
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i class="fab fa-twitter"></i><span class="d-none d-xl-inline d-xxl-inline"> Tuiter</span></a>
            <a className={`list-group-item
                         ${active === 'home' ? 'active' : ''}`}>
                <i class="fa fa-home"></i><span class="d-none d-xl-inline d-xxl-inline"> Home</span>
            </a>
            <a className={`list-group-item
                         ${active === 'explore' ? 'active' : ''}`}>
                <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline d-xxl-inline"> Explore</span>
            </a>
            <a className={`list-group-item
                         ${active === 'notifications' ? 'active' : ''}`}>
                <i class="fa fa-bell"></i><span class="d-none d-xl-inline d-xxl-inline"> Notifications</span>
            </a>
            <a className={`list-group-item
                         ${active === 'messages' ? 'active' : ''}`}>
                <i class="fa fa-envelope"></i><span class="d-none d-xl-inline d-xxl-inline"> Messages</span>
            </a>
            <a className={`list-group-item
                         ${active === 'bookmarks' ? 'active' : ''}`}>
                <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline d-xxl-inline"> Bookmarks</span>
            </a>
            <a className={`list-group-item
                         ${active === 'lists' ? 'active' : ''}`}>
                <i class="fa fa-list"></i><span class="d-none d-xl-inline d-xxl-inline"> Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <i class="fa fa-user"></i><span class="d-none d-xl-inline d-xxl-inline"> Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <i class="fa fa-circle"></i><span class="d-none d-xl-inline d-xxl-inline"> More</span>
            </a>
        </div>
    );

}

export default NavigationSidebar;