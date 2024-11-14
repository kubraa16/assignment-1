import React from 'react'
import { useTableContext } from '../Context/TableContext'

const CustomHeader = () => {
    const {headers} = useTableContext();
  return (
    
       
       <tr className="border-b border-gray-300">
      {headers.map((header, index) => (
       <th key={index} className="px-4 py-2 border border-gray-300 text-left">{header}</th>
      ))}
    </tr>
       
  )
}

export default CustomHeader