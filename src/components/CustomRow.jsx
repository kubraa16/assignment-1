import React from "react";
import CustomCell from "./CustomCell";
import data from "../data/data.json";
import { useSelector } from "react-redux";

const CustomRow = ({ stockData }) => {
  const { stocksData, loading, error } = useSelector((state) => state.stocks);
  console.log(stocksData);
  return (
    <>
      {stockData &&
        stockData.slice(0, 10).map((row, rowIndex) => (
          <tr
            className={` border-b border-gray-200 text-left w-full ${
              rowIndex % 2 === 0 ? "bg-white" : "bg-slate-200"
            }`}
            key={rowIndex}
          >
            {data.headers.map((header, colIndex) => (
              <CustomCell key={colIndex} data={row[header]}>
                {" "}
              </CustomCell>
            ))}
          </tr>
        ))}
    </>
  );
};

export default CustomRow;
