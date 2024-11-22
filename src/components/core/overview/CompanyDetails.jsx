import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyData } from "../../../store/reducers/compDetailsSlice";
import { useParams } from "react-router-dom";
import IncomeChart from "./IncomeChart";
import {
  detailsSelector,
  errorSelector,
  loadingSelector,
} from "../../../store/selectors/detailsSelector";
import DetailRow from "./DetailRow";
import DetailGrid from "./DetailGrid";

const CompanyDetails = () => {
  const { ticker } = useParams();
  const dispatch = useDispatch();
  const companyData = useSelector(detailsSelector);
  const loading = useSelector(loadingSelector);

  const data = companyData[ticker];

  useEffect(() => {
    if (!companyData[ticker]) {
      dispatch(fetchCompanyData(ticker));
    }
  }, [ticker]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="justify-center">
      <h2>Organization Overview</h2>
      <div className="flex ">
        <div className="p-6 border m-2">
          <div className="font-bold text-2xl text-black text-left py-5">
            {data?.Name}
          </div>
          <div className="font-semibold text-l text-slate-600 text-left">
            {data?.Description}
          </div>
          <DetailRow detail={"Industry"} data={data?.Industry} />
          <DetailRow detail={"Country"} data={data?.Country} />
          <DetailRow detail={"Address"} data={data?.Address} />
          <DetailRow detail={"Website"} data={data?.OfficialSite} />
        </div>
        <div className=" gap-4 m-2 p-6 border">
          <div>Highlights</div>
          <DetailGrid detail={"Shares"} data={data?.SharesOutstanding} />
          <DetailGrid detail={"Value"} data={data?.BookValue} />
          <DetailGrid detail={"Profit Margin"} data={data?.ProfitMargin} />
        </div>
      </div>

      <IncomeChart />
    </div>
  );
};

export default CompanyDetails;
