import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getOverview } from "../store/actionCreators/overviewActions";
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

import { Dispatch } from "redux";

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
      <div>overview</div>

      {overview ? (
        <div className="wrapper">
          <div className="line-chart-div">
            {" "}
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
            {" "}
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
        <div> loading..</div>
      )}
    </div>
  );
};

export default OverviewCampaign;
