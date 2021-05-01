import * as actionTypes from "../actionTypes/overviewActionTypes";
import axios from "axios";

export const getOverview = () => async () => {
  let overview: IOverview = { installs: [], revenue: [] };

  overview = await axios.get(
    "http://5c3db915a9d04f0014a98a79.mockapi.io/overview"
  );

  const action: OverviewAction = {
    type: actionTypes.GET_OVERVIEW,
    overview,
  };
  return (dispatch: OverviewDispatchType) => {
    dispatch(action);
  };
};
