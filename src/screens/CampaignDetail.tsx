import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampaigns as listCampaigns } from "../store/actionCreators/campaignActions";
import { Dispatch } from "redux";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GraphItem from "../components/GraphItem";

import "./CampaignDetail.css";

const CampaignDetail: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const campaigns: ICampaign[] = useSelector(
    (state: any) => state.campaigns,
    shallowEqual
  );
  const [selectedCampaign, setSelectedCampaign] = React.useState<
    ICampaign | {} | undefined
  >(campaigns[0]);

  const handleChange = (id: any) => {
    setSelectedCampaign(campaigns ? campaigns.find((x) => x.id === id) : {});
  };

  useEffect(() => {
    dispatch(listCampaigns());
  }, [dispatch]);

  return (
    <div>
      <FormControl className="form-control">
        <div className="components-div">
          <div>
            <Select
              className="campaign-select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={(selectedCampaign as ICampaign).id}
              onChange={(e) => {
                handleChange(e.target.value);
              }}
              label="Campaigns"
            >
              {campaigns.length >= 1
                ? campaigns.map((campaign: ICampaign, index) => (
                    <MenuItem key={campaign.id} value={campaign.id}>
                      {campaign.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </div>

          <div className="line-chart-div">
            {selectedCampaign ? (
              <GraphItem
                data={(selectedCampaign as ICampaign).installs as any}
              />
            ) : null}
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default CampaignDetail;
