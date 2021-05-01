import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  getCampaignsReducer,
  campaignReducer,
} from "../store/reducers/campaignReducers";
import { getOverviewReducer } from "../store/reducers/overviewReducers";

const temp = localStorage.getItem("articles");
const persistedState = temp ? JSON.parse(temp) : {};
const reducer = combineReducers({
  getOverview: getOverviewReducer,
  getCampaigns: getCampaignsReducer,
  campaign: campaignReducer,
});

// const store: Store<ArticleState, ArticleAction> & {
//   dispatch: DispatchType;
// } = createStore(reducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

//TODO: store a typeları vermemiz gerekebilir
export default createStore(
  reducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);
