import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampaigns } from "../store/actionCreators/campaignActions";
import { Dispatch } from "redux";

const CampaignDetail: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  // const overviewState = React.useCallback(() => dispatch(getOverview()), [
  //   dispatch,
  // ]);
  const campaigns: ICampaign[] = useSelector(
    (state: CampaignState) => state.campaigns,
    shallowEqual
  );
  //   const campaigns: readonly ICampaign[] = useSelector(
  //     (state: CampaignState) => state.campaigns,
  //     shallowEqual
  //   );

  useEffect(() => {
    dispatch(getCampaigns());
  }, [dispatch]);
  return (
    <div>
      <div>campaign detail</div>
      {campaigns
        ? campaigns.map((campaign: ICampaign) => <div>{campaign.name}</div>)
        : null}
    </div>
  );
};

export default CampaignDetail;
