import * as actionTypes from "../actionTypes/campaignActionTypes";
import axios from "axios";

export const addCampaign = (campaign: ICampaign) => {
  const action: CampaignAction = {
    type: actionTypes.ADD_CAMPAIGNS,
    campaign,
  };
  return (dispatch: CampaignDispatchType) => {
    //settimeout is used to simulate http request
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
  //getstate ile articles cekilecek
  //localStorage.setItem("cart", JSON.stringify(getState().articles));
};

export const getCampaigns = () => async () => {
  const temp = localStorage.getItem("articles");
  let campaigns: ICampaign[] = [];
  if (temp) {
    campaigns = JSON.parse(temp);
  } else {
    campaigns = await axios.get(
      "http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns"
    );
  }

  const action: CampaignsAction = {
    type: actionTypes.GET_CAMPAIGNS,
    campaigns,
  };
  return (dispatch: CampaignsDispatchType) => {
    dispatch(action);
  };
  //getstate ile articles cekilecek
  //localStorage.setItem("cart", JSON.stringify(getState().articles));
};
