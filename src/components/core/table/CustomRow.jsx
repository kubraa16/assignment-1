import React from "react";
import CustomCell from "./CustomCell";
import data from "../../../data/data.json";

const CustomRow = ({ stockData, isProducts }) => {
  return (
    <>
      {stockData &&
        stockData.map((row, rowIndex) => {
          return (
            <tr
              className={`border-b border-gray-200 text-left w-full ${
                rowIndex % 2 === 0 ? "bg-white" : "bg-slate-200"
              }`}
              key={rowIndex}
            >
              {!isProducts &&
                data.headers.map((header, colIndex) => {
                  const value = row[header];

                  return (
                    <CustomCell
                      key="${colIndex}${rowIndex}"
                      data={value}
                      isTicker={header === "ticker"}
                    ></CustomCell>
                  );
                })}
              {isProducts &&
                data.ProductHeaders.map((header, colIndex) => {
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
