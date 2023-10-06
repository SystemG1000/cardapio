import { useQuery } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData.vue";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData> => {
  try {
    const response = await axios.get(API_URL + '/food')
    return response.data;
  } catch (error) {
    console.log("Erro ao utilizar API")
    return Promise.reject(error)
  }
}


export function useFoodData() {
  const query = useQuery({
    queryKey: ["food-data"],
    queryFn: fetchData,
    retry: 2
  })

  return {
    ...query,
    data: query.data 
  }
}