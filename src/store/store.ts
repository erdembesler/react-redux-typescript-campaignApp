import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { campaignReducer as reducer } from "../store/reducers/campaignReducers";

const temp = localStorage.getItem("campaigns");
const persistedState = temp ? JSON.parse(temp) : {};

const INITIAL_STATE = {
  campaigns: persistedState,
};

export default createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(thunk))
);
