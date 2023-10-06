import { useMutation, useQueryClient } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData.vue";


const API_URL = 'http://localhost:8080';

const postData = async (data: FoodData): AxiosPromise<any> => {
  try {
    const response = await axios.post(API_URL + '/food', data)
    return response;
  } catch (error) {
    console.log("Erro ao utilizar API")
    return Promise.reject(error)
  }
}


export function useFoodDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries(['food-data'])
    }
  })
  return mutate;
}