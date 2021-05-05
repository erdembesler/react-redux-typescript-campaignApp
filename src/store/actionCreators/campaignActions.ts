import * as actionTypes from "../actionTypes/campaignActionTypes";
import axios from "axios";
import { Dispatch } from "redux";

//action to add new campaign
export const addCampaign = (campaign: ICampaign) => (
  dispatch: Dispatch<CampaignAction>,
  getState: () => CampaignState
): void => {
  const action: CampaignAction = {
    type: actionTypes.ADD_CAMPAIGNS,
    campaign,
  };
  dispatch(action);

  //set updated campaigns to local storage
  localStorage.setItem("campaigns", JSON.stringify(getState().campaigns));
};

//action to get campaigns
export const getCampaigns = () => {
  return async (
    dispatch: Dispatch<CampaignsAction>,
    getState: () => CampaignState
  ): Promise<void> => {
    //If there is not campaign data(the case at first opening) in local storage then get campaigns from api
    const temp = localStorage.getItem("campaigns");
    let campaigns: ICampaign[] = [];
    if (temp) {
      campaigns = JSON.parse(temp);
    } else {
      try {
        campaigns = await axios
          .get("https://5c3db915a9d04f0014a98a79.mockapi.io/campaigns")
          .then((res) => res.data);
      } catch (error) {
        console.log(error);
      }
    }
    const action2: CampaignsAction = {
      type: actionTypes.GET_CAMPAIGNS,
      campaigns,
    };
    dispatch(action2);

    //set campaigns to local storage
    localStorage.setItem("campaigns", JSON.stringify(getState().campaigns));
  };
};
