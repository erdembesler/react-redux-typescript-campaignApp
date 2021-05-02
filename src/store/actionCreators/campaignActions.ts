import * as actionTypes from "../actionTypes/campaignActionTypes";
import axios from "axios";
import { useDispatch } from "react-redux";

export const addCampaign = (campaign: ICampaign) => {
  const action: CampaignAction = {
    type: actionTypes.ADD_CAMPAIGNS,
    campaign,
  };
  return (dispatch: CampaignDispatchType) => {
    //settimeout is used to simulate http request
    dispatch(action);
  };
  //TODO: local storage
};

export const getCampaigns = () => async () => {
  const temp = localStorage.getItem("campaigns");
  let campaigns: ICampaign[] = [];
  if (temp) {
    campaigns = JSON.parse(temp);
  } else {
    campaigns = await axios
      .get("http://5c3db915a9d04f0014a98a79.mockapi.io/campaigns")
      .then((res) => res.data);
  }
  // let addedCampaigns: CampaignState ;
  // let campaign: ICampaign = { id: "", name: "",installs:[] };
  // const action1: CampaignAction = {
  //   type: actionTypes.GET_ADDED_CAMPAIGNS,
  //   campaign,
  // };
  // addedCampaigns = (dispatch: CampaignDispatchType) => {
  //   dispatch(action1);
  // }

  const action2: CampaignsAction = {
    type: actionTypes.GET_CAMPAIGNS,
    campaigns,
  };
  return (dispatch: CampaignsDispatchType) => {
    dispatch(action2);
  };
  //TODO: local storage
};
