import React from "react";
import CustomCell from "./CustomCell";
import data from "../data/data.json";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CustomRow = ({ stockData }) => {
  const { stocksData, loading, error } = useSelector((state) => state.stocks);
  return (
    <>
      {stockData &&
        stockData.slice(0, 10).map((row, rowIndex) => {
          console.log(row);
          return (
            <tr
              className={`border-b border-gray-200 text-left w-full ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-slate-200"
              }`}
              key={rowIndex}
            >
              {data.headers.map((header, colIndex) => {
                const value = row[header];

                return (
                  <CustomCell
                    key={colIndex}
                    data={value}
                    isTicker={header === "ticker"}
                  ></CustomCell>
                );
              })}
            </tr>
          );
        })}
    </>
  );
};

export default CustomRow;
