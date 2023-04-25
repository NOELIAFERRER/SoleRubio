import Pagination from "../components/Campaigns/Pagination/Pagination";
import { campaigns } from "../utils";
import { useState } from "react";

export default function Campaigns() {
  const [page, setPage] = useState(1);

  const [campaignsPerPage, setCampaignsPerPage] = useState(2);
  const indexLastCampaign = page * campaignsPerPage;
  const indexFirstCampaign = indexLastCampaign - campaignsPerPage;

  const currentCampaigns = campaigns?.slice(
    indexFirstCampaign,
    indexLastCampaign
  );

  const paging = (number) => {
    setPage(number);
  };

  return (
    <div>
      <h1>Campañas</h1>
      {currentCampaigns?.map((el) => (
        <div key={el}>el.image</div>   
      ))}

      <Pagination
        campaigns={campaigns.length}
        campaignsPerPage={campaignsPerPage}
        paging={paging}
        page={page}
      />
    </div>
  );
}