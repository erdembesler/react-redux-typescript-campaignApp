import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CampaignDetail from "./screens/CampaignDetail";
import Overview from "./screens/Overview";
import CreateCampaign from "./screens/CreateCampaign";
import NavBar from "./components/NavBar";

function App() {
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
          <Route></Route>
          <Route></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
