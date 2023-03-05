import React from "react";
const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <i className="bi bi-search position-absolute 
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link inactive">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link inactive">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="https://images.prismic.io/igspace/a058d990-edba-41ed-aa13-882d919f44df_Startship+4.jfif?auto=compress%2Cformat" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
        </>
    );
};
export default ExploreComponent;