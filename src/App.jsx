import { useEffect, useState } from "react";
import "./App.css";
import StocksTable from "./components/StocksTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData } from "./store/reducers/stocksSlice.js";
import data from "../src/data/data.json";
function App() {
  const dispatch = useDispatch();
  const { stocksData, loading, error } = useSelector((state) => state.stocks);
  console.log(stocksData);
  console.log(data.top_gainers);

  useEffect(() => {
    dispatch(fetchStocksData());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h2 className="text-lg font-bold py-3">Top Gainers</h2>
      <StocksTable data={stocksData?.top_gainers} />
      <h2 className="text-lg font-bold py-3">Top Loosers</h2>
      <StocksTable data={stocksData?.top_losers} />
    </div>
  );
}

export default App;
