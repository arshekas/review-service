import { useQuery } from 'react-query'
import useStorage from '../../../hooks/useStorage'
import { client, getClientConfig } from '../client'
import { queryKeys } from '../react-query/queryKeys'

export const fetchReviews = async (token) => {
   const response = await client.get(`/review`, getClientConfig(token))
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
