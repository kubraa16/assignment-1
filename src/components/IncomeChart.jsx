import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchIncomeData } from "../store/reducers/compIncomeSlice";
import {
  incomeSelector,
  loadingSelector,
} from "../store/selectors/incomeSelector";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js/auto";

const IncomeChart = () => {
  const { ticker } = useParams();
  const dispatch = useDispatch();
  const incomeDetails = useSelector(incomeSelector);
  const loading = useSelector(loadingSelector);
  console.log(incomeDetails);

  useEffect(() => {
    if (!incomeDetails[ticker]) {
      dispatch(fetchIncomeData(ticker));
    }
  }, [ticker, dispatch, incomeDetails]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!incomeDetails[ticker]) {
    return <h2>No data available for {ticker}</h2>;
  }

  const selectedData = incomeDetails[ticker].annualReports;
  console.log(selectedData);
  const labels = selectedData.map((data) => data.fiscalDateEnding);
  const totalRevenueData = selectedData.map((data) =>
    data.totalRevenue === "None" || data.totalRevenue === null
      ? 0
      : data.totalRevenue
  );

  const data = {
    labels,
    datasets: [
      {
        label: "Total Revenue (USD)",
        backgroundColor: "#6366f1",
        data: totalRevenueData,
      },
    ],
  };

  return (
    <div className="chart-container">
      <h2>Income Data for {ticker}</h2>
      {totalRevenueData ? <Bar data={data} /> : <div>Not found</div>}
    </div>
  );
};

export default IncomeChart;
