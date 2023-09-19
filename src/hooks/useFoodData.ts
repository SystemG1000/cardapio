import { useQuery } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData> => {
  try {
    const response = axios.get(API_URL + '/food');
    return response;
  } catch (error) {
    console.log("Erro ao capturar")
    return Promise.reject(error);
  } finally {
    console.log("Busca encerrada")
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