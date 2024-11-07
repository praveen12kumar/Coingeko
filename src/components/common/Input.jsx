import React from 'react'

function Input ({type, placeHolder, onChangeHandler, value, styles }) {
  return (
    <input
        className={`${styles} w-full px-4 py-2 bg-transparent rounded-md outline-none `} 
        type={type} 
        placeholder={placeHolder} 
        onChange={onChangeHandler} 
        value={value} />
  )
}

export default Input