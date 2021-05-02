import { createStore, combineReducers, applyMiddleware, Store } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getCampaignsReducer,
  campaignReducer,
} from "../store/reducers/campaignReducers";
import { getOverviewReducer } from "../store/reducers/overviewReducers";

const temp = localStorage.getItem("campaigns");
const persistedState = temp ? JSON.parse(temp) : {};

const reducer = combineReducers({
  getOverview: getOverviewReducer,
  getCampaigns: getCampaignsReducer,
  campaign: campaignReducer,
});
const INITIAL_STATE = {
  getCampaigns: {
    campaigns: persistedState,
  },
};

// const store: Store<
//   OverviewState | CampaignState | CampaignState,
//   CampaignAction | CampaignsAction | OverviewAction
// > & {
//   dispatch: CampaignDispatchType | CampaignsDispatchType | OverviewDispatchType;
// } = createStore(
//   reducer,
//   persistedState,
//   composeWithDevTools(applyMiddleware(thunk))
// );
// export default store;

//TODO: store a typeları vermemiz gerekebilir

// const store = configureStore({
//   reducer,

// })

export default createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);
