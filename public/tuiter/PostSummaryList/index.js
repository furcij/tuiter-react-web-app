import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    return (`
    <ul class="list-group pt-2 pb-2">
        ${posts.map(e => {
            return PostSummaryItem(e);
        }).join('')}
    </ul>
    `);
}

export default PostSummaryList;