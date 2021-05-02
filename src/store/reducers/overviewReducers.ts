import * as actionTypes from "../actionTypes/overviewActionTypes";

const initialState: OverviewState = {
  overview: { installs: [], revenue: [] },
};
export const getOverviewReducer = (
  state: OverviewState = initialState || {},
  action: OverviewAction
): OverviewState => {
  switch (action.type) {
    case actionTypes.GET_OVERVIEW:
      return { ...state, overview: action.overview };
  }
  return state;
};
