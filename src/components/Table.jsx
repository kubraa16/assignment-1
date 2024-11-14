import React from 'react'
import CustomCell from './CustomCell';
import CustomRow from './CustomRow';
import CustomHeader from './CustomHeader';
import { TableProvider } from '../Context/TableContext';

const Table = () => {
  return (
    <>
    <TableProvider>
    <div className="mb-4 text-2xl font-semibold">Table</div>
    <div className="overflow-x-auto">
      <table className="min-w-full table-fixed border-collapse">
        <thead className="bg-gray-200">
          <CustomHeader  />
        </thead>
        <tbody>
          <CustomRow  />
        </tbody>
      </table>
    </div>
    </TableProvider>
    </>
  )
}

export default Table