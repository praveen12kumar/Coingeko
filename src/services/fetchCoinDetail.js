import axiosInstance from "../utils/axiosInstance";

export const fetchCoinDetail = async (id) => {
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        return response.data;
    } catch (error) {
        console.error(error);
        return error.message;
    }
};