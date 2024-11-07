import React, { useContext, useState } from 'react';

import { IoMdTrendingDown, IoMdTrendingUp, } from "react-icons/io";

import { useNavigate } from 'react-router-dom';

function CoinCard ({ coin}) {
    const navigate = useNavigate();
    const [currencyType] = useState("$");
    

    
    const isPositiveChange = coin?.market_cap_change_percentage_24h >= 0;
    const changeColorClass = isPositiveChange ? "text-green-600 border-green-600" : "text-red-500 border-red-600";
    const hoverClass = isPositiveChange ? "hover:bg-green-600 hover:border-green-600" : "hover:bg-red-600 hover:border-red-600";


    


    return (
        <div 
        className={`w-[270px] mx-auto h-[280px] flex-col justify-center bg-[#f3f3f3] rounded-xl px-6 py-2 md:p-8 flex gap-3 cursor-pointer relative`}
            onClick={() => navigate(`/coin/${coin?.id}`)}
        >
            <div className={`w-full flex items-center gap-6`}>
                <img className='w-12 h-12 md:w-14 md:h-14' src={coin?.image} alt="coin" />
                <div className="flex flex-col items-start">
                    <h1 className='text-md md:text-lg uppercase font-poppins font-semibold'>{coin?.symbol}-USD</h1>
                    <h3 className='text-md font-poppins font-semibold uppercase'>{coin?.name}</h3>
                </div>
            </div>

            <div className={`w-full flex items-center justify-start  gap-8 py-1 md:py-2`}>
                <p className={`px-6 py-1 text-lg font-nunito font-semibold rounded-full border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                {coin?.market_cap_change_percentage_24h?.toFixed(2)}%
                </p>
                <p className={`px-6 py-2 rounded-full text-lg font-semibold border-2 ${changeColorClass} ${hoverClass} hover:text-white transition-colors duration-300 ease-in`}>
                    {isPositiveChange ? <IoMdTrendingUp /> : <IoMdTrendingDown />}
                </p>
            </div>

            <div className="w-full">
                <h1 className={`text-xl ${changeColorClass}  font-poppins font-semibold`}>
                    {currencyType}{coin?.current_price?.toFixed(2)}
                </h1>
            </div>

            <div className="w-full flex flex-col items-start gap-2">
                <h3 className='text-sm font-bold text-slate-600 font-nunito'>
                    <span className='text-sm font-normal  font-poppins text-slate-700'>Total Volume: </span>
                    {currencyType}{coin?.total_volume?.toFixed(2)}
                </h3>
                <h3 className='text-sm text-slate-600 font-nunito font-bold'>
                    <span className='text-sm font-normal font-poppins text-slate-700'>Market Cap: </span>
                    {currencyType}{coin?.market_cap?.toFixed(2)}
                </h3>
            </div>
        </div>
        
    );
}

export default CoinCard;
