import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function CustomErrorBoundaryUI ({error, resetErrorBoundary})  {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center rounded-lg">
      <div  role="alert" className="flex flex-col md:flex-row items-center  gap-4  p-10 bg-red-700 rounded-lg">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current text-white"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
    <p className='text-white'>Something went wrong:</p>
    <div className='text-white'>{error?.message}</div>
    <button className='text-white border border-white px-4 py-1' onClick={resetErrorBoundary}>Try Again</button>
  </div>
    </div>
  )
}

export default function CustomErrorBoundary({children}){
  return(
    <ErrorBoundary FallbackComponent={CustomErrorBoundaryUI}  
      onReset={()=>{window.location.reload()}}
    >
      {children}
    </ErrorBoundary>
  )
}