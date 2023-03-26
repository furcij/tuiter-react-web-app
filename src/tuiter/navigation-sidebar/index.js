import React from "react";
const NavigationSidebar = (
    {active}
) => {
    console.log(active)
    return (
        <div className="list-group">
            <a className="list-group-item">
                <i className="fab fa-twitter"></i><span className="d-none d-xl-inline d-xxl-inline"> Tuiter</span></a>
            <a className={`list-group-item ${active === 'home' ? 'active' : ''}`}>
                <i className="fa fa-home"></i><span className="d-none d-xl-inline d-xxl-inline"> Home</span>
            </a>
            <a className={`list-group-item
                         ${active === 'explore' ? 'active' : ''}`}>
                <i className="fa fa-hashtag"></i><span className="d-none d-xl-inline d-xxl-inline"> Explore</span>
            </a>
            <a className={`list-group-item
                         ${active === 'notifications' ? 'active' : ''}`}>
                <i className="fa fa-bell"></i><span className="d-none d-xl-inline d-xxl-inline"> Notifications</span>
            </a>
            <a className={`list-group-item
                         ${active === 'messages' ? 'active' : ''}`}>
                <i className="fa fa-envelope"></i><span className="d-none d-xl-inline d-xxl-inline"> Messages</span>
            </a>
            <a className={`list-group-item
                         ${active === 'bookmarks' ? 'active' : ''}`}>
                <i className="fa fa-bookmark"></i><span className="d-none d-xl-inline d-xxl-inline"> Bookmarks</span>
            </a>
            <a className={`list-group-item
                         ${active === 'lists' ? 'active' : ''}`}>
                <i className="fa fa-list"></i><span className="d-none d-xl-inline d-xxl-inline"> Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <i className="fa fa-user"></i><span className="d-none d-xl-inline d-xxl-inline"> Profile</span>
            </a>
            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`}>
                <i className="fa fa-circle"></i><span className="d-none d-xl-inline d-xxl-inline"> More</span>
            </a>
        </div>
    );

}

export default NavigationSidebar;