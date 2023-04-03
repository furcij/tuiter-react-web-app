import React from "react";
import { ArrowRepeat, Chat, Share } from "react-bootstrap-icons";
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";
const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();
    const likeHandler = ({ tuit }, addLike) => {
        dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.likes + (addLike ? 1 : -1),
            liked: addLike,
        }))
    }
    const dislikeHandler = ({ tuit }, addDislike) => {
        dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.dislikes + (addDislike ? 1 : -1),
            disliked: addDislike,
        }))
    }
    return (
        <div className="row">
            <div className="col-2">
                <Chat />
                <span> {tuit.replies}</span>
            </div>
            <div className="col-2">
                <ArrowRepeat />
                <span> {tuit.retuits}</span>
            </div>
            <div className="col-3">
                {tuit.liked && <i onClick={() => {
                    likeHandler({ tuit }, false)
                }} className="bi bi-heart-fill me-2 text-danger"></i>}
                {!tuit.liked && <i onClick={() => {
                    likeHandler({ tuit }, true)
                }} className="bi bi-heart me-2"></i>}
                <span> {tuit.likes}</span>
            </div>
            <div className="col-3">
                {tuit.disliked && <i onClick={() => {
                    dislikeHandler({ tuit }, false)
                }} className="bi bi-hand-thumbs-down-fill me-2 text-primary"></i>}
                {!tuit.disliked && <i onClick={() => {
                    dislikeHandler({ tuit }, true)
                }} className="bi bi-hand-thumbs-down me-2"></i>}
                <span> {tuit.dislikes}</span>
            </div>
            <div className="col-2">
                <Share />
            </div>
            <div>
            </div>
        </div>
    );
}

export default TuitStats;