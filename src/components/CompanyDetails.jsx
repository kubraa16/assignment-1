import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompanyData } from "../store/reducers/compDetailsSlice";
import { useParams } from "react-router-dom";

const CompanyDetails = () => {
  const { ticker } = useParams();
  const dispatch = useDispatch();
  const { companyData, loading, error } = useSelector(
    (state) => state.compDetails
  );

  console.log(companyData);

  useEffect(() => {
    if (!companyData[ticker] || !companyData.Symbol) {
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
            {companyData?.Name}
          </div>
          <div className="font-semibold text-l text-slate-600 text-left">
            {companyData?.Description}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Industry: {companyData?.Industry}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Country: {companyData?.Country}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Address: {companyData?.Address}
          </div>
          <div className="text-left font-semibold text-l text-slate-600 ">
            Website: {companyData?.OfficialSite}
          </div>
        </div>
        <div className=" gap-4 m-2 p-6 border">
          <div>Highlights</div>
          <div className="border flex flex-col p-4 m-2">
            <div className=" font-semibold text-blue-700">Shares</div>
            <div className="font-semibold">
              {companyData?.SharesOutstanding}
            </div>
          </div>
          <div className="border flex flex-col p-4 m-2 items-center">
            <div className="text-left font-semibold text-blue-700">value</div>
            <div className="font-semibold">{companyData?.BookValue}</div>
          </div>
          <div className="border flex flex-col p-4 m-2 items-center">
            <div className="text-left font-semibold text-blue-700">
              Profit margin
            </div>
            <div className="font-semibold">{companyData?.ProfitMargin}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
