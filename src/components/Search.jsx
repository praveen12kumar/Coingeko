import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import Input from "../components/common/Input";
import { useQuery, keepPreviousData } from '@tanstack/react-query';
import axios from 'axios';
import SearchedResults from './SearchedResults';

const Search = () => {
    const [search, setSearch] = useState("");
    const fetchSearchCoins = async()=>{
        const response = await axios.get(`https://api.coingecko.com/api/v3/search?query=${search}`)
        const data = response?.data?.coins?.filter((coin)=>
            coin?.name?.toLowerCase()?.includes(search?.toLowerCase()) || coin?.symbol?.toLowerCase()?.includes(search?.toLowerCase())
            ).splice(0, 10);
        return data;
    }

    const {isLoading, error, data:searchResults} = useQuery({queryKey:["searchResults", search], queryFn:fetchSearchCoins, placeholderData: keepPreviousData, staleTime:6000})

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    };
  return (
    <div className="w-full mt-10 relative">
    <div className=" w-[80%] py-1 pl-6 mx-auto rounded-full flex items-center  bg-[#f3f3f3] ">
        <IoIosSearch className='text-2xl font-bold'/>
        <Input 
            styles={"text-md font-poppins text-slate-700"}
            type={"text"}
            placeHolder={"Search"}
            value={search}
            onChangeHandler={handleInputChange}
            />
    </div>

    {
        search && searchResults?.length > 0 ? <SearchedResults searchedResults={searchResults} isLoading={isLoading} error={error} /> : null
    }
</div>
  )
}

export default Search