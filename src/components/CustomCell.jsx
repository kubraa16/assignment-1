import React from 'react'

const CustomCell = ({ data }) => {
  return (
    <td className='px-4 py-2 w-full border border-gray-300 truncate w-1/3'>
      {data}
    </td>
  )
}

export default CustomCell