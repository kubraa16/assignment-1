import React, { useEffect } from "react";
import CustomRow from "./CustomRow";
import header from "../data/data.json";
const StocksTable = ({ data }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {header?.headers.map((header, index) => (
              <th
                className="px-3 py-2 bg-slate-300 border border-slate-100"
                key={index}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <CustomRow stockData={data} />
        </tbody>
      </table>
    </>
  );
};

export default StocksTable;
