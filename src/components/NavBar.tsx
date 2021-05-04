import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import sundayLogo from "../assets/sundayGames.png";
import * as React from "react";

const NavBar: React.FC = () => {
  const history = useHistory();

  const [overviewVar, setOverviewVar] = React.useState<
    "outlined" | "text" | "contained" | undefined
  >("outlined");
  const [campaignsVar, setCampaignsVar] = React.useState<
    "outlined" | "text" | "contained" | undefined
  >("text");
  const [createVar, setCreateVar] = React.useState<
    "outlined" | "text" | "contained" | undefined
  >("text");

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <img className="logo" src={sundayLogo} alt="sundayLogo" />

          <div className="wrapper">
            <Button
              variant={overviewVar}
              onClick={() => {
                history.push("/");
                setOverviewVar("outlined");
                setCampaignsVar("text");
                setCreateVar("text");
              }}
              color="inherit"
            >
              Overview
            </Button>
            <Button
              variant={campaignsVar}
              onClick={() => {
                history.push("/campaignDetail");
                setOverviewVar("text");
                setCampaignsVar("outlined");
                setCreateVar("text");
              }}
              color="inherit"
            >
              Campaigns
            </Button>
            <Button
              variant={createVar}
              onClick={() => {
                history.push("/createCampaign");
                setOverviewVar("text");
                setCampaignsVar("text");
                setCreateVar("outlined");
              }}
              color="inherit"
            >
              Create campaign
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
