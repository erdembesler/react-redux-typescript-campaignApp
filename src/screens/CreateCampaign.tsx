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
  //TODO: installs will be given by a function
  const [campaign, setCampaign] = React.useState<ICampaign | {}>({
    id: Math.random().toString(),
    installs: installsCreator(),
  });
  const [disabled, setDisabled] = React.useState<boolean>(true);

  const [openAlert, setOpenAlert] = React.useState<boolean>(false);

  function Alert(props: any) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleCloseAlert = (event: any, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };

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
    setCampaign(campaign);
    saveCampaign(campaign as ICampaign);
    setOpenAlert(true);

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
      <div className="input__container">
        <div className="inputfield__div">
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
