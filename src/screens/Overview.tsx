import * as React from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Overview.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { CircularProgress } from "@material-ui/core";

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
            <LineChart
              className="line-chart"
              width={600}
              height={300}
              data={overview!.installs}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis dataKey="value" />
              <Tooltip />
            </LineChart>
          </div>
          <div className="line-chart-div">
            <div>
              <h2>Revenue</h2>
            </div>

            <LineChart
              className="line-chart"
              width={600}
              height={300}
              data={overview!.revenue}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="day" />
              <YAxis dataKey="value" />
              <Tooltip />
            </LineChart>
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
