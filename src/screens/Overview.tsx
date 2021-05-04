import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Overview.css";

import { CircularProgress } from "@material-ui/core";
import GraphItem from "../components/GraphItem";

const OverviewCampaign: React.FC = () => {
  const [overview, setOverview] = React.useState<IOverview>();

  useEffect(() => {
    // Create an scoped async function in the hook
    async function overviewFunction() {
      await axios
        .get("http://5c3db915a9d04f0014a98a79.mockapi.io/overview")
        .then((resp) => {
          setOverview(resp.data);
        });
    }
    overviewFunction();
  }, []);

  return (
    <div>
      {overview ? (
        <div className="wrapper">
          <div className="line-chart-div">
            <div>
              <h2>Installs</h2>
            </div>
            <GraphItem data={overview!.installs} />
          </div>
          <div className="line-chart-div">
            <div>
              <h2>Revenue</h2>
            </div>
            <GraphItem data={overview!.revenue} />
          </div>
        </div>
      ) : (
        <div className="circ-progress">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default OverviewCampaign;
