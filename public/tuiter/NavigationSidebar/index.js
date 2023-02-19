const NavigationSidebar = () => {
    return (`
    <div class="list-group pb-2">
    <i class="list-group-item rounded-top fab fa-twitter"></i>
    <a href="home/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-home"></i><span class="d-none d-xl-inline d-xxl-inline"> Home</span></a>
    <a href="explore/index.html" class="list-group-item list-group-item-action active">
        <i class="fa fa-hashtag"></i><span class="d-none d-xl-inline d-xxl-inline"> Explore</span></a>
    <a href="notifications/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-bell"></i><span class="d-none d-xl-inline d-xxl-inline">
            Notifications</span></a>
    <a href="messages/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-envelope"></i><span class="d-none d-xl-inline d-xxl-inline"> Messages</span></a>
    <a href="bookmarks/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-bookmark"></i><span class="d-none d-xl-inline d-xxl-inline">
            Bookmarks</span></a>
    <a href="lists/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-list"></i><span class="d-none d-xl-inline d-xxl-inline"> Lists</span></a>
    <a href="profile/index.html" class="list-group-item list-group-item-action">
        <i class="fa fa-user"></i><span class="d-none d-xl-inline d-xxl-inline"> Profile</span></a>
    <a href="more/index.html" class="list-group-item rounded-bottom list-group-item-action">
        <i class="fa fa-circle"></i><span class="d-none d-xl-inline d-xxl-inline"> More</span></a>
    </div>
    <a href="tuit.html"
        class="btn width-full btn-primary btn-block rounded-pill">
        Tuit</a>
    `);
}
export default NavigationSidebar;