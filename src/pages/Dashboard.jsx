import React, { useContext, useState } from 'react';
import CoinContext from "../context/CoinContext";
import { useQuery} from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import Grid from '../components/Grid';
import List from '../components/List';
import Loader from '../components/common/Loader';
import ToggleGridList from '../components/ToggleGridList';
import Error from '../components/common/Error';
import Search from '../components/Search';
import Pagination from '../components/Pagination';
import { fetchProducts } from '../services/fetchProducts';
import Dropdown from '../components/Dropdown/Dropdown';

const Dashboard = () => {

  const [listView, setListView] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams({page:1, per_page:12});
  const page = parseInt(searchParams.get('page') || 1);

  const {currency, setCurrency} = useContext(CoinContext);

  const {isLoading, error, data:products} = 
      useQuery({queryKey:["products", page, currency], 
      queryFn:()=>fetchProducts(page, currency),
      keepPreviousData:true, 
      // retry:2,
      // retryDelay:1000,
      staleTime:1000 * 60 * 2,
      cacheTime:1000 * 60 * 2,
    });

  const toggle = () => {
    setListView((prev) => !prev);
  }

  const handlePageChange = (page) =>{
    setSearchParams((prev)=>{
      const newParams = new URLSearchParams(prev);
      newParams.set("page", page);
      return newParams
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
            <div className="w-full flex gap-10 items-center justify-center mt-10">
                <Search />
                <Dropdown setCurrency={setCurrency}  />
            </div>
            <ToggleGridList listView={listView} toggle={toggle}/>
        <div className="w-full">
        {
            listView ? <List allCoins={ products}/> : <Grid allCoins={products}/>
        }
        </div>

        <div className="text-center">
            <Pagination currentPage={page} totalPages={8} onPageChange={handlePageChange}/>
        </div>
    </div>
  )
}

export default Dashboard