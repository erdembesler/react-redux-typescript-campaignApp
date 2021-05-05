import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCampaigns as listCampaigns } from "../store/actionCreators/campaignActions";
import { Dispatch } from "redux";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import GraphItem from "../components/GraphItem";
import { CircularProgress } from "@material-ui/core";

import "./CampaignDetail.css";

const CampaignDetail: React.FC = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const campaigns: ICampaign[] = useSelector(
    (state: any) => state.campaigns,
    shallowEqual
  );

  const [selectedCampaign, setSelectedCampaign] = React.useState<
    ICampaign | undefined
  >(campaigns[0]);

  //handling selectedCampaign change
  const handleChange = (id: any) => {
    setSelectedCampaign(
      (campaigns ? campaigns.find((x) => x.id === id) : {}) as ICampaign
    );
  };

  //get campaigns
  useEffect(() => {
    dispatch(listCampaigns());
  }, [dispatch]);

  //set default campaign to be show on page opening
  useEffect(() => {
    setSelectedCampaign(campaigns[0]);
  }, [campaigns]);
  return (
    <div>
      <FormControl className="form-control">
        <div className="components-div">
          <div>
            {selectedCampaign ? (
              <Select
                className="campaign-select"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={
                  selectedCampaign
                    ? (selectedCampaign as ICampaign).id
                    : campaigns[0].id
                }
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
            ) : (
              <div>
                <CircularProgress />
              </div>
            )}
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
