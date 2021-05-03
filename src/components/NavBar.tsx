import { Button, AppBar, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import sundayLogo from "../assets/sundayGames.png";

const NavBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="wrapper">
            {/* <div className="logo-div">
              
            </div> */}
            <img className="logo" src={sundayLogo} alt="sundayLogo" />
            <Button
              onClick={() => {
                history.push("/");
              }}
              color="inherit"
            >
              Overview
            </Button>
            <Button
              onClick={() => {
                history.push("/campaignDetail");
              }}
              color="inherit"
            >
              Campaigns
            </Button>
            <Button
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
