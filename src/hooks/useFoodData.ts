import { useQuery } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

/* const fetchData = async (): AxiosPromise<FoodData> => {
  const response = axios.get(API_URL + '/food');
  console.log(response)
  console.log((await response).data)
  return (await response).data;
} */


const fetchData = async (): AxiosPromise<FoodData> => {
  try {
    const response = await axios.get<FoodData[]>(API_URL + '/food')
    console.log((await response).data)
    return (await response).data
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Finish search")
  }
}

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data
  }
}