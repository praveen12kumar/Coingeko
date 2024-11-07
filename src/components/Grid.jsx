import React from 'react';
import CoinCard from './coin/CoinCard';


function Grid({ allCoins}) {
  return (
    <div className={`max-w-[80vw] mx-auto min-h-full mt-5 flex flex-wrap justify-center  gap-6`}>
      {allCoins && allCoins.length > 0 ? (
        allCoins.map((coin) => (
          <CoinCard key={coin?.id} coin={coin} />
        ))
      ) : (
        <p className="text-2xl font-poppins font-semibold text-gray-700 text-center w-full">No coins available.</p>
      )}
    </div>   
  );
}

export default Grid;
