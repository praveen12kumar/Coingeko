import React from 'react'

function Button ({text, styles, onClickHandler, value}) {
  return (
    <button 
        onClick={onClickHandler}
        value={value}
        className={`${styles} px-3 text-[10px] md:px-5 md:text-md lg:px-6 py-2 font-poppins font-semibold rounded-full transition-all duration-300 ease-in`}>
        {text}</button>
  )

}

export default Button