import { useEffect, useState } from "react";
import "./App.css";
import StocksTable from "./components/StocksTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocksData } from "./store/reducers/stocksSlice.js";
import data from "../src/data/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyDetails from "./components/CompanyDetails.jsx";
import {
  errorSelector,
  gainersSelector,
  loadingSelector,
  losersSelecter,
} from "./store/selectors/stocksSelector.js";
function App() {
  const dispatch = useDispatch();
  // const { topGainers, topLosers, loading, error } = useSelector(
  //   (state) => state.stocks
  // );
  const topGainers = useSelector(gainersSelector);
  const topLosers = useSelector(losersSelecter);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);

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
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h2 className="text-lg font-bold py-3">Top Gainers</h2>
              <StocksTable data={topGainers} />
              <h2 className="text-lg font-bold py-3">Top Loosers</h2>
              <StocksTable data={topLosers} />
            </div>
          }
        />
        <Route path="/company/:ticker" element={<CompanyDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
