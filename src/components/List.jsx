import React from 'react'
import CoinListCard from './coin/CoinListCard'


function List  ({allCoins}) {
  return (
    <div className='flex flex-col gap-5'>
        {
           allCoins && allCoins?.map((coin)=>{
                return(
                    <CoinListCard key={coin?.id}  coin={coin}/>
                )
            })
        }
    </div>
  )
}

export default List