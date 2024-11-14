import React from 'react'
import CustomCell from './CustomCell'

const CustomRow = ({data , headers}) => {
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