import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampaigns as listCampaigns } from "../store/actionCreators/campaignActions";
import { Dispatch } from "redux";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import "./CampaignDetail.css";

const CampaignDetail: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const campaigns: ICampaign[] = useSelector(
    (state: any) => state.campaigns,
    shallowEqual
  );
  const [selectedCampaign, setSelectedCampaign] = React.useState<
    ICampaign | {} | undefined
  >(campaigns[1]);

  const handleChange = (id: any) => {
    debugger;
    setSelectedCampaign(campaigns ? campaigns.find((x) => x.id === id) : {});
  };

  useEffect(() => {
    dispatch(listCampaigns());
  }, [dispatch]);

  return (
    <div>
      <FormControl variant="outlined" className="form-control">
        <div className="components-div">
          <div>
            <InputLabel id="demo-simple-select-outlined-label">
              Campaign
            </InputLabel>

            <Select
              className="campaign-select"
              // labelId="demo-simple-select-outlined-label"
              // id="demo-simple-select-outlined"
              // value={(selectedCampaign as ICampaign).name}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              label="Campaigns"
            >
              {campaigns.length >= 1
                ? campaigns.map((campaign: ICampaign, index) => (
                    <MenuItem key={index} value={campaign.id}>
                      {campaign.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </div>

          <div className="line-chart-div">
            <LineChart
              className="line-chart"
              width={600}
              height={300}
              data={(selectedCampaign as ICampaign).installs}
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
      </FormControl>
    </div>
  );
};

export default CampaignDetail;
