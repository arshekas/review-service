import { useMutation } from 'react-query'
import { showErrorMsg, showSuccessMsg } from '../../../functions/notifications'
import useStorage from '../../../hooks/useStorage'
import { client, getClientConfig } from '../client'
import { queryClient } from '../react-query/queryClient'
import { queryKeys } from '../react-query/queryKeys'

export const deleteReview = async (reviewId, token) => {
   const response = await client.delete(
      `/review/${reviewId}`,
      getClientConfig(token),
   )
   const { data } = response
   return data
}

export function useDeleteReview() {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((reviewId) => deleteReview(reviewId, token), {
      onSuccess: () => {
         // refetching the updated reviews
         queryClient.invalidateQueries([queryKeys.reviews])
         showSuccessMsg('Review Deleted Successfully!')
      },
      onError: () => {
         showErrorMsg('Error while deleting a review!')
      },
   })
}
