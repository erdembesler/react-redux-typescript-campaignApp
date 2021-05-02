import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  // getCampaignsReducer,
  campaignReducer,
} from "../store/reducers/campaignReducers";
import { getOverviewReducer } from "../store/reducers/overviewReducers";

const temp = localStorage.getItem("campaigns");
const persistedState = temp ? JSON.parse(temp) : {};

// const reducer = combineReducers({
//   getOverview: getOverviewReducer,
//   // getCampaigns: getCampaignsReducer,
//   campaign: campaignReducer,
// });
const INITIAL_STATE = {
  campaigns: persistedState,
};

export default createStore(
  campaignReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);
