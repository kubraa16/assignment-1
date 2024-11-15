import React from 'react'
import CustomCell from './CustomCell';
import CustomRow from './CustomRow';
import CustomHeader from './CustomHeader';
import { TableProvider } from '../Context/TableContext';

const Table = () => {
  return (
    <>
    <TableProvider>
    <div className="mb-4 text-2xl font-semibold">Assignment 1</div>
    <div className="overflow-x-auto w-full">
  <table className="border border-gray-300 min-w-full border-collapse table-auto">
    <thead className="bg-gray-200">
      <CustomHeader />
      
    </thead>
    <tbody>
      <CustomRow />
    </tbody>
  </table>
</div>

    </TableProvider>
    </>
  )
}

export default Table