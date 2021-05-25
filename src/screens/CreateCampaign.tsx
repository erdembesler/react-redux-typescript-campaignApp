import * as React from "react";
import { addCampaign } from "../store/actionCreators/campaignActions";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

import "./CreateCampaign.css";

import { Dispatch } from "redux";
const CreateCampaign: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const saveCampaign = React.useCallback(
    (campaign: ICampaign) => dispatch(addCampaign(campaign)),
    [dispatch]
  );

  //create random install values for the campaign
  const installsCreator = () => {
    return [
      { day: "monday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "tuesday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "wednesday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "thursday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "friday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "saturday", value: Math.floor(Math.random() * 80) + 10 },
      { day: "sunday", value: Math.floor(Math.random() * 80) + 10 },
    ];
  };

  const [campaign, setCampaign] = React.useState<ICampaign>({
    id: Math.random().toString(),
    installs: installsCreator(),
  } as ICampaign);

  const [disabled, setDisabled] = React.useState<boolean>(true);

  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  // Alert will be triggered after campaign creation
  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  //Triggered after closing alert
  const handleCloseAlert = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

  //triggered after onChange of name textField
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

  //triggered after create campaign button onClick
  const addNewCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    setCampaign(campaign);
    saveCampaign(campaign as ICampaign);
    setOpenAlert(true);

    // id is not really unique, but most probably it will (for a couple of campaigns added for sure :))
    setCampaign({
      ...campaign,
      name: "",
      id: Math.random().toString(),
      installs: installsCreator(),
    });
    setDisabled(true);
  };

  return (
    <form onSubmit={addNewCampaign}>
      <div className="input-container">
        <div className="inputfield-div">
          <TextField
            required
            id="name"
            value={(campaign as ICampaign).name || ""}
            className="input"
            onChange={(e) => handleCampaignData(e as any)}
            label="Name"
            variant="outlined"
          />
        </div>
      </div>

      <div className="button-div">
        <Button
          disabled={disabled ? true : false}
          className="add-button"
          id="installs"
          variant="contained"
          color="primary"
          onClick={addNewCampaign}
        >
          Add Campaign
        </Button>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleCloseAlert}
      >
        <Alert onClose={handleCloseAlert} severity="success">
          Campaign has been created!
        </Alert>
      </Snackbar>
    </form>
  );
};

export default CreateCampaign;
