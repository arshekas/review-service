import { useQuery } from 'react-query'
import useStorage from '../../../hooks/useStorage'
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
export function useGetReviews(initialData = [], options = {}) {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')

   const query = useQuery([queryKeys.reviews], () => fetchReviews(token), {
      initialData,
      ...options,
      enabled: !!token,
   })
   return {
      ...query,
      data: query.data?.reviews ?? query?.data,
   }
}
