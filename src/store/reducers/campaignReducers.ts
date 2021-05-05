import * as actionTypes from "../actionTypes/campaignActionTypes";

const initialState: CampaignState = {
  campaigns: [],
};

export const campaignReducer = (
  state: CampaignState = initialState || [],
  action: unknown
): CampaignState => {
  let newCampaign: ICampaign = { id: "", name: "", installs: [] };
  if (
    (action as CampaignAction | CampaignsAction).type ===
    actionTypes.ADD_CAMPAIGNS
  ) {
    newCampaign = {
      id: ((action as CampaignAction).campaign as ICampaign).id,
      name: ((action as CampaignAction).campaign as ICampaign).name,
      installs: ((action as CampaignAction).campaign as ICampaign).installs,
    };
  }

  switch ((action as CampaignAction | CampaignsAction).type) {
    case actionTypes.ADD_CAMPAIGNS:
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
      return { campaigns: (action as CampaignsAction).campaigns };
  }
  return state;
};
