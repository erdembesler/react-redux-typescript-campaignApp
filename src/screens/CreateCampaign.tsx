import * as React from "react";
import { addCampaign } from "../store/actionCreators/campaignActions";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import "./CreateCampaign.css";

import { Dispatch } from "redux";
const CreateCampaign: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const saveCampaign = React.useCallback(
    (campaign: ICampaign) => dispatch(addCampaign(campaign)),
    [dispatch]
  );
  const [campaign, setCampaign] = React.useState<ICampaign | {}>({
    id: Math.random().toString(),
    installs: [
      { day: "monday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "tuesday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "wednesday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "thursday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "friday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "saturday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "sunday", value: Math.floor(Math.random() * 80) + 10 },
    ],
  });
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const handleCampaignData = (e: React.FormEvent<HTMLInputElement>) => {
    setCampaign({
      ...campaign,
      [e.currentTarget.id]: e.currentTarget.value,
    });
    if (e.currentTarget.value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const addNewCampaign = (e: React.FormEvent) => {
    debugger;
    e.preventDefault();
    saveCampaign(campaign as ICampaign);
  };
  return (
    <form onSubmit={addNewCampaign}>
      <div className="input__container">
        <div className="inputfield__div">
          <TextField
            required
            id="name"
            className="input"
            onChange={(e) => handleCampaignData(e as any)}
            label="Name"
            variant="outlined"
          />
        </div>
      </div>

      <div className="button__div">
        <Button
          disabled={disabled ? true : false}
          className="addButton"
          id="installs"
          variant="contained"
          color="primary"
          onClick={addNewCampaign}
        >
          Add Campaign
        </Button>
      </div>
    </form>
  );
};

export default CreateCampaign;
