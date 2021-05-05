import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import CampaignDetail from "./screens/CampaignDetail";
import Overview from "./screens/Overview";
import CreateCampaign from "./screens/CreateCampaign";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route exact path="/" component={Overview}></Route>
          <Route
            exact
            path="/campaignDetail"
            component={CampaignDetail}
          ></Route>
          <Route
            exact
            path="/createCampaign"
            component={CreateCampaign}
          ></Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
