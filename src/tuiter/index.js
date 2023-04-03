import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from "react-redux";
import HomeComponent from "./home";
const store = configureStore({ reducer: { who: whoReducer, tuitsData: tuitsReducer } });

function Tuiter({selected}) {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active={selected} />
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6 mb-2"
          style={{ "position": "relative" }}>
          {(selected === 'home') && <HomeComponent/>}
          {(selected === 'explore') && <ExploreComponent />}
        </div>
        <div className="d-none d-xxl-block d-xl-block d-lg-block col-xxl-4 col-xl-4 col-lg-4">
          <WhoToFollowList />
        </div>
      </div>
    </Provider>
  );
}

export default Tuiter;