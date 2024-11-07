import React from 'react'

const Heading = ({text, styles}) => {
  return (
    <div className={`${styles} text-[18vw] md:text-[10vw] lg:text-[8vw] font-poppins font-semibold leading-none select-none`}>{text}</div>
  )
}

export default Heading