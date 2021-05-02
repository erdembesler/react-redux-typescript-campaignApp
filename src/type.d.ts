interface IInstall {
  day: string;
  value: number;
}

interface ICampaign {
  id: string;
  name: string;
  installs: IInstall[];
}

type CampaignState = {
  campaigns: ICampaign[];
};

type CampaignAction = {
  type: string;
  campaign?: ICampaign;
};
type CampaignsAction = {
  type: string;
  campaigns: ICampaign[];
};

type CampaignDispatchType = (args: CampaignAction) => CampaignAction;
type CampaignsDispatchType = (args: CampaignsAction) => CampaignsAction;

interface IRevenue {
  day: string;
  value: number;
}

interface IOverview {
  installs: IInstall[];
  revenue: IRevenue[];
}

type OverviewState = {
  overview: IOverview;
};

type OverviewAction = {
  type: string;
  overview: IOverview;
};

type OverviewDispatchType = (args: OverviewAction) => OverviewAction;
