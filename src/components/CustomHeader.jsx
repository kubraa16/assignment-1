import React from 'react'

const CustomHeader = ({headers}) => {
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