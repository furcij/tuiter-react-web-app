import React from "react";
const NavigationSidebar = (
    {
        active = 'explore',
    }
) => {
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i class="fab fa-twitter"></i> Tuiter</a>
            <a className={`list-group-item
                         ${active === 'home' ? 'active' : ''}`}>
                <i class="fa fa-home"></i> Home
            </a>
            <a className={`list-group-item
                         ${active === 'explore' ? 'active' : ''}`}>
                <i class="fa fa-hashtag"></i> Explore
            </a>
            <a className={`list-group-item
                         ${active === 'notifications' ? 'active' : ''}`}>
                <i class="fa fa-bell"></i> Notifications
            </a>
            <a className={`list-group-item
                         ${active === 'messages' ? 'active' : ''}`}>
                <i class="fa fa-envelope"></i> Messages
            </a>
            <a className={`list-group-item
                         ${active === 'bookmarks' ? 'active' : ''}`}>
                <i class="fa fa-bookmark"></i> Bookmarks
            </a>
            <a className={`list-group-item
                         ${active === 'lists' ? 'active' : ''}`}>
                <i class="fa fa-list"></i> Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <i class="fa fa-user"></i> Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <i class="fa fa-circle"></i> More
            </a>
        </div>
    );

}

export default NavigationSidebar;