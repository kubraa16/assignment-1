import React, { useEffect } from "react";
import CustomRow from "./CustomRow";
import header from "../../data/data.json";
const CustomTable = ({ data, isProducts }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {!isProducts
              ? header?.headers.map((header, index) => (
                  <th
                    className="px-3 py-2 bg-slate-300 border border-slate-100"
                    key={index}
                  >
                    {header}
                  </th>
                ))
              : header?.ProductHeaders.map((header, index) => (
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
          <CustomRow datas={data} isProducts={isProducts} />
        </tbody>
      </table>
    </>
  );
};

export default CustomTable;
