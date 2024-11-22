import React from "react";

const DetailRow = ({ detail, data }) => {
  return (
    <div className="text-left font-semibold text-l text-slate-600 ">
      {detail}: {data}
    </div>
  );
};

export default DetailRow;
