import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import PostSummaryList from "./post-summary-list";

function Tuiter() {
    return (
        <div>
            <Nav />
            <NavigationSidebar active="home" />
            <ExploreComponent />
            <WhoToFollowList />
            <PostSummaryList />
        </div>
    )
}

export default Tuiter;