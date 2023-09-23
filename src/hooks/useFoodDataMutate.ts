import { useQueryClient, useMutation } from '@tanstack/vue-query';
import axios, { AxiosPromise } from "axios";
import { FoodData } from "../interface/FoodData";

const API_URL = 'http://localhost:8080';

/* const postData = async (data: FoodData): AxiosPromise<any> => {
  try {
    const response = await axios.post<FoodData[]>(API_URL + '/food', data)
    return (await response).data
  } catch (error) {
    console.log(error)
  } finally {
    console.log("Finish search")
  }
} */

const postData = async (data: FoodData): AxiosPromise<any> => {
  const response = axios.post(API_URL + '/food', data);
  return response
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