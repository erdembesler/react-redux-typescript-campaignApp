import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampaigns as listCampaigns } from "../store/actionCreators/campaignActions";
import { Dispatch } from "redux";

const CampaignDetail: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const campaigns: ICampaign[] = useSelector(
    (state: any) => state.campaigns,
    shallowEqual
  );

  useEffect(() => {
    debugger;
    dispatch(listCampaigns());
  }, [dispatch]);

  return (
    <div>
      <div>campaign detail</div>
      {campaigns.length >= 1
        ? campaigns.map((campaign: ICampaign) => <div>{campaign.name}</div>)
        : null}
    </div>
  );
};

export default CampaignDetail;
