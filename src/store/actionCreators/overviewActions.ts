import * as actionTypes from "../actionTypes/overviewActionTypes";
import axios from "axios";

export const getOverview = () => async () => {
  let overview: IOverview = await axios
    .get("https://5c3db915a9d04f0014a98a79.mockapi.io/overview")
    .then((resp) => resp.data);

  const action: OverviewAction = {
    type: actionTypes.GET_OVERVIEW,
    overview,
  };
  return (dispatch: OverviewDispatchType) => {
    dispatch(action);
  };
};
