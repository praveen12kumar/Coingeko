import React from 'react'
import { Link } from 'react-router-dom';
import Loader from './common/Loader';


const SearchedResults = ({searchedResults, isLoading, error}) => {
    
  return (
    <div className='absolute top-[6vw] left-1/2 -translate-x-1/2 w-1/2 h-[30vh] bg-slate-200 rounded-xl overflow-scroll z-40'>
              {
                isLoading ? <Loader/> : 
                  searchedResults?.map((coin)=>{
                    return(
                      <Link to={`/coin/${coin?.id}`} className="w-full h-[3vw] flex items-center justify-start gap-3 odd:bg-white py-4 px-3 cursor-pointer">
                        <img className='w-7 h-7 rounded-full' src={coin?.thumb} alt="thumnail" />
                        <h1 className='text-lg font-poppins font-semibold'>{coin?.symbol}</h1>
                        <p className='text-sm font-poppins font-semibold'>{coin?.name}</p>
                       
                      </Link>
                    )
                  })
                
              }
          </div>
  )
}

export default SearchedResults