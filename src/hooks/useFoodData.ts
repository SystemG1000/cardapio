import { useQuery } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<FoodData> => {
  try {
    const response = await axios.get(API_URL + '/food')
    return response;
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
    data: query.data ? query.data : "Error"
  }
}

/* const fetchData = async (): AxiosPromise<FoodData> => {
  try {
    const response = axios.get(API_URL + '/food');
    return response;
  } catch (error) {
    console.log("Erro ao capturar")
    return Promise.reject(error);
  } finally {
    console.log("Busca encerrada")
  }

} */


/* 
Método não assincrono

axios.get(API_URL + '/food')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })
  .finally(function () {
    // Sempre será executado
  }); */