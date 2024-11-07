import React from 'react'
import Heading from '../common/Heading'
const CoinDescription = ({text, description}) => {
  return (
    <div>
        <h1 className='"text-2xl text-slate-800 font-poppins font-semibold "'>{text}</h1> 
        <p className='text-sm font-nunito' dangerouslySetInnerHTML={{__html: description}}></p>
    </div>
  )
}

export default CoinDescription