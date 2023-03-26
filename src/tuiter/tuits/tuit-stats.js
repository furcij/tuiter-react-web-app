import React from "react";
import { ArrowRepeat, Chat, Heart, HeartFill, Share } from "react-bootstrap-icons";
const TuitStats = ({ tuit }) => {
    return (
        <div className="row">
            <div className="col-3">
                <Chat />
                <span> {tuit.replies}</span>
            </div>
            <div className="col-3">
                <ArrowRepeat />
                <span> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                {tuit.liked && <HeartFill color="red"/>}
                {!tuit.liked && <Heart />}
                <span> {tuit.likes}</span>
            </div>
            <div className="col-3">
                <Share />
            </div>
        </div>
    );
}

export default TuitStats;