import React from "react";
import { useDispatch } from "react-redux";
import TuitStats from "./tuit-stats";
import { deleteTuitThunk } from "../../services/tuits-thunks";
const TuitItem = ({ tuit }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (
        <li className="list-group-item pt-2 pb-2 ps-3 width-full">
            <img className="float-left avatar-image" src={tuit.image} alt=""></img>
            <i className="bi bi-x-lg float-right z-index-2" onClick={() => deleteTuitHandler(tuit._id)}></i>
            <div className="tuit-content z-index-1">
                <b>{tuit.userName}</b>
                <i className="fa fa-check-circle ps-1 pt-1"></i>
                <span className="small-gray-text ms-1">{tuit.handle} • {tuit.time}</span>
            </div>
            <p className="tuit-content me-2">{tuit.tuit}</p>
            <div className="tuit-content">
                <TuitStats tuit={tuit} />
            </div>
        </li>)
}

export default TuitItem;