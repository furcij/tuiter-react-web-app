import React from "react";
import { Link } from "react-router-dom";
const NavigationSidebar = ({ active }) => {
    return (
        <div className="list-group">
            <Link className="list-group-item" to="/tuiter">
                <i className="fab fa-twitter"></i><span className="d-none d-xl-inline d-xxl-inline"> Tuiter</span></Link>
            <Link className={`list-group-item ${active === 'home' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-home"></i><span className="d-none d-xl-inline d-xxl-inline"> Home</span>
            </Link>
            <Link className={`list-group-item
                         ${active === 'explore' ? 'active' : ''}`} to="/tuiter/explore">
                <i className="fa fa-hashtag"></i><span className="d-none d-xl-inline d-xxl-inline"> Explore</span>
            </Link>
            <Link className={`list-group-item
                         ${active === 'notifications' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-bell"></i><span className="d-none d-xl-inline d-xxl-inline"> Notifications</span>
            </Link>
            <Link className={`list-group-item
                         ${active === 'messages' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-envelope"></i><span className="d-none d-xl-inline d-xxl-inline"> Messages</span>
            </Link>
            <Link className={`list-group-item
                         ${active === 'bookmarks' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-bookmark"></i><span className="d-none d-xl-inline d-xxl-inline"> Bookmarks</span>
            </Link>
            <Link className={`list-group-item
                         ${active === 'lists' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-list"></i><span className="d-none d-xl-inline d-xxl-inline"> Lists</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-user"></i><span className="d-none d-xl-inline d-xxl-inline"> Profile</span>
            </Link>
            <Link className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} to="/tuiter">
                <i className="fa fa-circle"></i><span className="d-none d-xl-inline d-xxl-inline"> More</span>
            </Link>
        </div>
    );

}

export default NavigationSidebar;