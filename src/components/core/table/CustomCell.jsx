import React from "react";
import { Link } from "react-router-dom";

const CustomCell = ({ data, isTicker }) => {
  return (
    <td className="px-4 py-2 border border-gray-300 truncate w-1/3">
      {isTicker ? (
        <Link
          to={`/company/${data}`}
          className="text-blue-500 hover:text-blue-700"
        >
          {data}
        </Link>
      ) : (
        data
      )}
    </td>
  );
};

export default CustomCell;
