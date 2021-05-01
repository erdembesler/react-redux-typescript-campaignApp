import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CampaignDetail from "./screens/CampaignDetail";
import Overview from "./screens/Overview";
import CreateCampaign from "./screens/CreateCampaign";

function App() {
  return (
    <Router>
      <main>
        <Switch>
          <Route exact path="/" component={Overview}></Route>
          <Route
            exact
            path="/campaigndetail"
            component={CampaignDetail}
          ></Route>
          <Route
            exact
            path="/createCampaign"
            component={CreateCampaign}
          ></Route>
          <Route></Route>
          <Route></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
