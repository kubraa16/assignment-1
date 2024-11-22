import React from "react";

const DetailGrid = ({ detail, data }) => {
  return (
    <div className="border flex flex-col p-4 m-2">
      <div className=" font-semibold text-blue-700">{detail}</div>
      <div className="font-semibold">{data}</div>
    </div>
  );
};

export default DetailGrid;
