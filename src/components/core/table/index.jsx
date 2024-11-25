import React, { useEffect } from "react";
import StocksTable from "./StockTable";
import { useDispatch, useSelector } from "react-redux";
import {
  errorSelector,
  gainersSelector,
  loadingSelector,
  losersSelecter,
} from "../../../store/selectors/stocksSelector";
import { fetchStocksData } from "../../../store/reducers/stocksSlice";

const IndexTable = () => {
  const dispatch = useDispatch();
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
    <div>
      <h2 className="text-lg font-bold py-3">Top Gainers</h2>
      <StocksTable data={topGainers} />
      <h2 className="text-lg font-bold py-3">Top Loosers</h2>
      <StocksTable data={topLosers} />
    </div>
  );
};

export default IndexTable;
