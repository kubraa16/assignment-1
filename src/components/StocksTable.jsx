import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux"
import { fetchStocksData } from '../features/stocksSlice';
import data from '../data/data.json'
const StocksTable = () => {
    const dispatch = useDispatch();
    const {stocksData, loading, error} = useSelector((state) => state.stocks); 
    console.log(data.top_gainers)
    useEffect(() => {
        dispatch(fetchStocksData());
    },[dispatch]);
    
    if(loading){
        return <h1>Loading...</h1>;
    }
    if(error){
        return<h1>Error: {error}</h1>;
    }
  return (
    <>
    {data?.headers.map((header, index) => (
      <h1 key={index}>{header}</h1>
    ))}
   {data?.top_gainers.map((stocks, index) => (
    <>
    <h1 key={0}>{stocks.change_amount}</h1>
    </>
   ))}

    </>   
  )
}

export default StocksTable