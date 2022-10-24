import { useQuery } from 'react-query'
import client from '../client'
import { queryKeys } from '../react-query/queryKeys'

const getConfig = (token) => {
   return {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
}

export const fetchReviews = async (token) => {
   const response = await client.get(`/review`, getConfig(token))
   const { data } = response
   return data
}
export function useGetReviews(initialData = [], options = {}, token) {
   const query = useQuery([queryKeys.reviews], () => fetchReviews(token), {
      initialData,
      ...options,
   })
   return {
      ...query,
      data: query.data?.reviews ?? query?.data,
   }
}
