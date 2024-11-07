import { useQuery, keepPreviousData } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loader from '../components/common/Loader';
import Error from '../components/common/Error';
import CoinDetailCard from '../components/coin/CoinDetailCard';
import CoinDescription from '../components/coin/CoinDescription';
import Dropdown from '../components/common/Dropdown';
import Button from '../components/common/Button';
import { gettingDate } from '../utils';
import LineChart from '../components/LineChart';

const CoinDetail = () => {
  const { id } = useParams();
  const [charData, setCharData] = useState({ labels: [], datasets: [{}] });
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");

  const fetchCoin = async () => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
    return response.data;
  };

  const getGraphData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
      {
        params: {
          vs_currency: 'usd',
          days,
          interval: 'daily',
        },
      }
    );

    const data = 
      priceType === "market_caps" ? response.data.market_caps :
      priceType === "total_volumes" ? response.data.total_volumes :
      response.data.prices;

    setCharData({
      labels: data.map((item) => gettingDate(item[0])),
      datasets: [{
        borderWidth: 1,
        fill: true,
        data: data.map((item) => item[1]),
        backgroundColor: 'rgba(58, 128, 233, 0.1)',
        tension: 0.25,
        borderColor: '#3a80e9',
        pointRadius: 0,
        yAxisID: "crypto1",
      }],
    });
    
    return data;
  };

  const { isLoading, error, data: coin } = useQuery({
    queryKey: ["coin", id],
    queryFn: fetchCoin,
    placeholderData: keepPreviousData,
    staleTime: 6000,
  });

  const { isLoading: graphLoading, error: graphError, } = useQuery({
    queryKey: ["graph", id, days, priceType],
    queryFn: getGraphData,
    refetchInterval: 10000,
  });


  const onClickHandler = (e) => {
    setPriceType(e.target.value);
  };

  if (isLoading || graphLoading) {
    return <Loader />;
  }

  if (error || graphError) {
    return <Error />;
  }

  return (
    <div className="w-full h-full flex flex-col gap-10 mt-10">
      <CoinDetailCard coin={coin} />
      <div className="w-[90%] p-4 md:p-8 mx-auto flex items-center justify-evenly bg-slate-100 rounded-2xl">
        <div className="flex items-center ">
          <Dropdown days={days} setDays={setDays} priceType={priceType} setPriceType={setPriceType} />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
          <Button 
            text="Price" 
            value="prices" 
            onClickHandler={onClickHandler} 
            styles={`${priceType === "prices" ? "bg-[#3A80E9] text-white border-none" : ""} w-[100px] md:w-[120px] border-2 border-blue-700`} 
          />
          <Button 
            text="Market Cap" 
            value="market_caps" 
            onClickHandler={onClickHandler} 
            styles={`${priceType === "market_caps" ? "bg-[#3A80E9] text-white border-none" : ""} w-[120px] md:w-[140px] border-2 border-blue-700`} 
          />
          <Button 
            text="Volume" 
            value="total_volumes" 
            onClickHandler={onClickHandler} 
            styles={`${priceType === "total_volumes" ? "bg-[#3A80E9] text-white border-none" : ""} w-[100px] md:w-[120px] border-2 border-blue-700`} 
          />
        </div>
      </div>
          <div className="w-[90vw]  mx-auto p-4 bg-slate-100 rounded-2xl">
                <LineChart chartData={charData} priceType={priceType} />
            </div>
      <div className="w-[90%] mx-auto bg-slate-100 p-4 rounded-2xl text-md font-nunito">
        <CoinDescription text={coin.name} description={coin?.description?.en} />
      </div>
    </div>
  );
};

export default CoinDetail;
