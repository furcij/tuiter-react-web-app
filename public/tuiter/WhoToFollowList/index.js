import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
    <ul class="list-group">
        <div class="list-group-item pt-2 pb-2 ps-3">
            <b>Who to follow</b>
        </div>
        ${who.map(w => {
            return WhoToFollowListItem(w);
        }).join('')}
    </ul>
    `);
}

export default WhoToFollowList;