import React from 'react'

const CustomCell = ({ data }) => {
  return (
    <div className='py-4 text-sm break-words max-w-xs truncate'>
      {data}
    </div>
  )
}

export default CustomCell