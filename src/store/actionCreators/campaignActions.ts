import * as actionTypes from "../actionTypes/campaignActionTypes";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

export const addCampaign = (campaign: ICampaign) => (
  dispatch: Dispatch<CampaignAction>,
  getState: () => CampaignState
) => {
  const action: CampaignAction = {
    type: actionTypes.ADD_CAMPAIGNS,
    campaign,
  };
  //settimeout is used to simulate http request
  dispatch(action);
  localStorage.setItem("campaigns", JSON.stringify(getState().campaigns));
};

export const getCampaigns = () => {
  return async (
    dispatch: Dispatch<CampaignsAction>,
    getState: () => CampaignState
  ) => {
    debugger;
    const temp = localStorage.getItem("campaigns");
    let campaigns: ICampaign[] = [];
    if (temp) {
      campaigns = JSON.parse(temp);
    } else {
      try {
        campaigns = await axios
          .get("http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns")
          .then((res) => res.data);
      } catch {}
    }
    const action2: CampaignsAction = {
      type: actionTypes.GET_CAMPAIGNS,
      campaigns,
    };
    dispatch(action2);

    localStorage.setItem("campaigns", JSON.stringify(getState().campaigns));
  };
};
