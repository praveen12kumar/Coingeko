import React, { useState } from 'react'
import { IoMdTrendingDown, IoMdTrendingUp } from "react-icons/io";
import { convertNumber } from '../../utils';

function CoinDetailCard  ({coin}) {
    const [show, setShow] = useState("");
    const [currencyType] = useState("$");


    const isPositiveChange = coin?.market_data?.market_cap_change_percentage_24h >= 0;
    const changeColorClass = isPositiveChange ? "text-green-600 border-green-600" : "text-red-500 border-red-600";
    const hoverClass = isPositiveChange ? "hover:bg-green-600 hover:border-green-600" : "hover:bg-red-600 hover:border-red-600";

  return (
    <div className={`w-full md:w-[90vw] bg-[#f3f3f3]  mx-auto h-[100px] flex items-center justify-between pl-2 md:pl-4 md:p-4 rounded-2xl cursor-pointer relative`}>
        <div className={`w-full flex items-center gap-2 md:gap-6`}>
            <img className='w-8 h-8 md:w-14 md:h-14' src={coin?.image?.small} alt="coin-image" />
            <div className="flex flex-col items-start">
                <h1 className='text-[12px] md:text-lg uppercase font-poppins font-semibold'>{coin?.symbol}-USD</h1>
                <h3 className='text-[10px] md:text-lg font-poppins uppercase'>{coin?.name}</h3>
            </div>
        </div>

        <div className={`w-full flex items-center justify-center md:justify-start  gap-2 md:gap-8 py-1 md:py-2`}>
            <p className={`px-1 md:px-6 py-0 md:py-1 text-[10px] md:text-lg font-nunito font-semibold rounded-full border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
            {coin?.market_data?.market_cap_change_percentage_24h?.toFixed(2)}%
            </p>
            <p className={`hidden md:block px-1 md:px-6 py-0 md:py-2 text-sm md:text-lg font-nunito font-semibold rounded-full border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                {isPositiveChange ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
            </p>
        </div>

        <div className="w-full">
            <h1 className={`text-sm md:text-lg ${changeColorClass}  font-poppins font-semibold`}>
                {currencyType}{coin?.market_data?.current_price?.usd}
            </h1>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-start gap-2 lg:gap-10">
            <h3 className='text-sm md:text-md lg:text-lg font-bold text-slate-600 font-nunito'>
                {currencyType}{convertNumber(coin?.market_data?.total_volume?.usd)}
            </h3>
            <h3 className=' hidden md:block text-sm md:text-md lg:text-lg text-slate-600 font-nunito font-bold'>
                {currencyType}{convertNumber(coin?.market_data?.market_cap?.usd)}
            </h3>
        </div>
    </div>
  )
}

export default CoinDetailCard