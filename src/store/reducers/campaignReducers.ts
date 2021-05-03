import * as actionTypes from "../actionTypes/campaignActionTypes";

const initialState: CampaignState = {
  campaigns: [],
};

export const campaignReducer = (
  state: CampaignState = initialState || [],
  action: any
): CampaignState => {
  debugger;
  switch (action.type) {
    case actionTypes.ADD_CAMPAIGNS:
      const newCampaign: ICampaign = {
        id: action.campaign.id, // not really unique
        name: action.campaign.name,
        installs: action.campaign.installs,
      };
      if (state.campaigns.length >= 1) {
        return {
          ...state,
          campaigns: [...state.campaigns, newCampaign],
        };
      } else {
        return {
          ...state,
          campaigns: [newCampaign],
        };
      }
    case actionTypes.GET_CAMPAIGNS:
      return { campaigns: action.campaigns };
  }
  return state;
};
