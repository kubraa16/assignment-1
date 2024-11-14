import React from 'react'
import CustomCell from './CustomCell'
import { useTableContext } from '../Context/TableContext'

const CustomRow = () => {
    const {data , headers} = useTableContext();
  return (
    <>
         {data && data.map((row , rowIndex) => (
                <tr className={` border-b border-gray-200 text-left w-full ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-200" }`} key={rowIndex}>
                    {headers.map((header , colIndex) => (
                        <CustomCell key={colIndex} data={row[header]}> </CustomCell>
                    ))}
                </tr>
            ))} 
    </>
  )
}

export default CustomRow