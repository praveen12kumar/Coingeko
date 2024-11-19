import React from 'react'

const CoinDescription = ({text, description}) => {
  return (
    <div>
        {
          text?.length > 0 && description?.length > 0 ? (
            <>
              <h1 className='"text-2xl text-slate-800 font-poppins font-semibold "'>{text}</h1> 
              <p className='text-sm font-nunito' dangerouslySetInnerHTML={{__html: description}}></p>
            </>
          ) :(
            <p className="text-2xl text-red-600 font-poppins font-semibold text-center w-full">No description available.</p>
          )
        }
    </div>
  )
}

export default CoinDescription