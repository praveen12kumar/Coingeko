import React from 'react'

const ToggleGridList = ({listView, toggle}) => {
    
  return (
    <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className={`w-1/2 cursor-pointer border-b-2 ${!listView ? "border-[#3A80E9]" : ""}`} onClick={toggle}>
                <h1 className='text-lg text-slate-700 text-center font-poppins font-semibold'>Grid</h1>
            </div>
            <div className={`w-1/2 cursor-pointer border-b-2 ${listView ? "border-[#3A80E9]" : ""}`} onClick={toggle}>
                <h1 className='text-lg text-slate-700 text-center font-poppins font-semibold'>List</h1>
            </div>
        </div>
  )
}

export default ToggleGridList