import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyData } from "../store/reducers/compDetailsSlice";
import { useParams } from "react-router-dom";
import IncomeChart from "./IncomeChart";
import {
  detailsSelector,
  errorSelector,
  loadingSelector,
} from "../store/selectors/detailsSelector";

const CompanyDetails = () => {
  const { ticker } = useParams();
  const dispatch = useDispatch();
  // const { companyData, loading, error } = useSelector(
  //   (state) => state.compDetails
  // );
  const companyData = useSelector(detailsSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

  console.log(companyData);

  useEffect(() => {
    if (!companyData[ticker]) {
      dispatch(fetchCompanyData(ticker));
    }
  }, [ticker]);

  if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Error: {error}</h1>;

  return (
    <div className="justify-center">
      <h2>Organization Overview</h2>
      <div className="flex ">
        <div className="p-6 border m-2">
          <div className="font-bold text-2xl text-black text-left py-5">
            {companyData[ticker]?.Name}
          </div>
          <div className="font-semibold text-l text-slate-600 text-left">
            {companyData[ticker]?.Description}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Industry: {companyData[ticker]?.Industry}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Country: {companyData[ticker]?.Country}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Address: {companyData[ticker]?.Address}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Website: {companyData[ticker]?.OfficialSite}
          </div>
        </div>
        <div className=" gap-4 m-2 p-6 border">
          <div>Highlights</div>
          <div className="border flex flex-col p-4 m-2">
            <div className=" font-semibold text-blue-700">Shares</div>
            <div className="font-semibold">
              {companyData[ticker]?.SharesOutstanding}
            </div>
          </div>
          <div className="border flex flex-col p-4 m-2 items-center">
            <div className="text-left font-semibold text-blue-700">value</div>
            <div className="font-semibold">
              {companyData[ticker]?.BookValue}
            </div>
          </div>
          <div className="border flex flex-col p-4 m-2 items-center">
            <div className="text-left font-semibold text-blue-700">
              Profit margin
            </div>
            <div className="font-semibold">
              {companyData[ticker]?.ProfitMargin}
            </div>
          </div>
        </div>
      </div>

      <IncomeChart />
    </div>
  );
};

export default CompanyDetails;
