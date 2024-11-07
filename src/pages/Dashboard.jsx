import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Grid from '../components/Grid';
import List from '../components/List';
import Loader from '../components/common/Loader';
import ToggleGridList from '../components/ToggleGridList';
import Error from '../components/common/Error';
import Search from '../components/Search';
import Pagination from '../components/Pagination';

const Dashboard = () => {

  const [listView, setListView] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({page:1, per_page:12});
  const page = parseInt(searchParams.get('page') || 1);
  const per_page = parseInt(searchParams.get('per_page') || 12);
  
  const fetchProducts = async ()=>{
    let url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${per_page}&page=${page}`;
    const response = await axios.get(url);
    return response.data;
  } 


  const {isLoading, error, data:products} = useQuery({queryKey:["products", page], queryFn:fetchProducts, placeholderData: keepPreviousData, staleTime:6000})

  const toggle = () => {
    setListView((prev) => !prev);
  }

  const handlePageChange = (page) =>{
    setSearchParams((prev)=>{
      prev.set('page',page)
      return prev;
    })
  }

  if(isLoading){
    console.log("loading", isLoading);
    return <Loader />
  }
  if(error){
    return <Error message={error.message} />
  }
  

  return (
    <div className='max-w-[90vw] mx-auto min-h-[calc(100vh-10vh)] flex flex-col gap-8 mb-10 relative '>
            <Search/>
            <ToggleGridList listView={listView} toggle={toggle}/>
        <div className="w-full">
        {
            listView ? <List allCoins={ products} listView={listView}/> : <Grid allCoins={products} listView={listView}/>
        }
        </div>

        <div className="text-center">
            <Pagination currentPage={page} totalPages={8} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}

export default Dashboard