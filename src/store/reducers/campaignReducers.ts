import * as actionTypes from "../actionTypes/campaignActionTypes";

const initialState: CampaignState = {
  campaigns: [],
};

export const campaignReducer = (
  state: CampaignState = initialState || [],
  action: CampaignAction
): CampaignState => {
  switch (action.type) {
    case actionTypes.ADD_CAMPAIGNS:
      const newCampaign: ICampaign = {
        id: Math.random().toString(), // not really unique
        name: action.campaign.name,
        installs: [], //TODO: installs campaign yuklenırken handle edileceke
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
      return { campaigns: state.campaigns };
  }
  return state;
};

export const getCampaignsReducer = (
  state: CampaignState = initialState || [],
  action: CampaignsAction
): CampaignState => {
  switch (action.type) {
    case actionTypes.GET_CAMPAIGNS:
      // const campaigns: CampaignState = {
      //   campaigns: action.campaigns, //TODO: installs campaign yuklenırken handle edileceke
      // };
      return { ...state, campaigns: action.campaigns };
  }
  return state;
};
