import React from 'react'
import CustomCell from './CustomCell'
import { useTableContext } from '../Context/TableContext'

const CustomRow = () => {
    const {data , headers} = useTableContext();
  return (
    <div>
         {data && data.map((row , rowIndex) => (
                <tr className={`flex w-full justify-around ${rowIndex % 2 === 0 ? "bg-white" : "bg-slate-200" }`} key={rowIndex}>
                    {headers.map((header , colIndex) => (
                        <CustomCell key={colIndex} data={row[header]}> </CustomCell>
                    ))}
                </tr>
            ))} 
    </div>
  )
}

export default CustomRow