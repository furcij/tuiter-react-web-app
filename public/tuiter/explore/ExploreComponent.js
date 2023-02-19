import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
    <div class="searchbar float-left">
        <i class="fa fa-search ps-2 pt-1"></i>
        <input class="no-border width-90-percent ps-3 pt-1 input-no-outline bg-white" placeholder="Search Tuiter">
    </div>
    <button type="button" class="cog-button float-right bg-black">
        <i class="fa fa-cog fa-2x" style="color: #2a9fd6"> </i>
    </button><br>
    <ul class="nav nav-tabs float-left pt-2 width-full">
        <li class="nav-item pe-1">
            <a class="nav-link active" href="for-you.html">For you</a>
        </li>
        <li class="nav-item ps-1 pe-1">
            <a class="nav-link" href="trending.html">Trending</a>
        </li>
        <li class="nav-item ps-1 pe-1">
            <a class="nav-link" href="news.html">News</a>
        </li>
        <li class="nav-item ps-1 pe-1">
            <a class="nav-link" href="sports.html">Sports</a>
        </li>
        <li class="d-md-block d-sm-none nav-item ps-1 pe-1">
            <a class="nav-link" href="entertainment.html">Entertainment</a>
        </li>
    </ul><br>
    <div class="position-relative">
        <img class="explore-image pt-2"
            src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg">
        <div class="explore-image-text text-gray"><b>SpaceX's Starship</b></div>
    </div>
    ${PostSummaryList()}
    `);
}
export default ExploreComponent;