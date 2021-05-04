import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import sundayLogo from "../assets/sundayGames.png";
import * as React from "react";
import { useLocation } from "react-router-dom";

const NavBar: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const overviewVar = location.pathname === "/" ? "outlined" : "text";
  const campaignsVar =
    location.pathname === "/campaignDetail" ? "outlined" : "text";
  const createVar =
    location.pathname === "/createCampaign" ? "outlined" : "text";

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <img className="logo" src={sundayLogo} alt="sundayLogo" />

          <div className="wrapper">
            <Button
              style={{ width: "160px" }}
              variant={overviewVar}
              onClick={() => {
                history.push("/");
              }}
              color="inherit"
            >
              Overview
            </Button>
            <Button
              style={{ width: "160px" }}
              variant={campaignsVar}
              onClick={() => {
                history.push("/campaignDetail");
              }}
              color="inherit"
            >
              Campaigns
            </Button>
            <Button
              style={{ width: "180px" }}
              variant={createVar}
              onClick={() => {
                history.push("/createCampaign");
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
