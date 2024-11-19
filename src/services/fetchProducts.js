
import axiosInstance from "../utils/axiosInstance";

export const fetchProducts = async (page = 1, currency='usd')=>{
    const per_page = 12;

    try {
        const response = await axiosInstance.get(`/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=${per_page}&page=${page}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error.message;
    }
} 