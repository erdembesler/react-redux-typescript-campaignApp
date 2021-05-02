import { Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const history = useHistory();

  return (
    <div className={"root"}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={"title"}>
            Sunday-Test-Task
          </Typography>
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
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
