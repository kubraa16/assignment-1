import React from 'react'
import CustomCell from './CustomCell';
import CustomRow from './CustomRow';
import CustomHeader from './CustomHeader';

const Table = () => {
   const headers = ["Company" , "Contact" , "Country"];
    const data = [{
        Company: "Alfreds Futterkiste",
        Contact: "Maria Anders",
        Country: "Germany"
    }, {
        Company: "Centro Commercial Moezetuts",
        Contact: "Maria Anders",
        Country: "Germany"
    },{
        Company: "Alfreds Futterkiste3",
        Contact: "Maria Anders",
        Country: "Germany"
    },{
        Company: "Alfreds Futterkiste4",
        Contact: "Maria Anders",
        Country: "Germany"
    },{
        Company: "Alfreds Futterkiste5",
        Contact: "Maria Anders",
        Country: "Germany"
    }, {
        Company: "Alfreds Futterkiste6",
        Contact: "Maria Anders",
        Country: "Germany"
    }]
  return (
    <>
    <div className="mb-4 text-2xl font-semibold">Table</div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border-collapse">
        <thead className="bg-gray-200">
          <CustomHeader headers={headers} />
        </thead>
        <tbody>
          <CustomRow data={data} headers={headers} />
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Table