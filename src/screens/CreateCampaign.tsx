import * as React from "react";
import { addCampaign } from "../store/actionCreators/campaignActions";
import { useDispatch } from "react-redux";

import { Dispatch } from "redux";
const CreateCampaign: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const saveCampaign = React.useCallback(
    (campaign: ICampaign) => dispatch(addCampaign(campaign)),
    [dispatch]
  );
  const [campaign, setCampaign] = React.useState<ICampaign | {}>();

  const handleCampaignData = (e: React.FormEvent<HTMLInputElement>) => {
    setCampaign({
      ...campaign,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    saveCampaign(campaign as ICampaign);
  };
  return (
    <form onSubmit={addNewCampaign}>
      <div>
        <h1>CreateCampaign</h1>
      </div>
      <input
        type="text"
        id="name"
        placeholder="Name"
        onChange={handleCampaignData}
      />
      <button disabled={campaign === undefined ? true : false}>
        Add Campaign
      </button>
    </form>
  );
};

export default CreateCampaign;
