import React from 'react'
import { useTableContext } from '../Context/TableContext'

const CustomHeader = () => {
    const {headers} = useTableContext();
  return (
    <div>
       
        <tr className='flex w-full py-4 justify-around'>
            {headers.map((header, index) => (
                <>
                <tr key={index}>{header}</tr>
                </>
            ))}   
        </tr>
       
    </div>
  )
}

export default CustomHeader