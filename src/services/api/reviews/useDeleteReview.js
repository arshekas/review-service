import { useMutation } from 'react-query'
import { showErrorMsg, showSuccessMsg } from '../../../functions/notifications'
import useStorage from '../../../hooks/useStorage'
import client from '../client'
import { queryClient } from '../react-query/queryClient'
import { queryKeys } from '../react-query/queryKeys'

const getConfig = (token) => {
   return {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
}

export const deleteReview = async (reviewId, token) => {
   const response = await client.delete(`/review/${reviewId}`, getConfig(token))
   const { data } = response
   return data
}

export function useDeleteReview() {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((reviewId) => deleteReview(reviewId, token), {
      onSuccess: () => {
         queryClient.invalidateQueries([queryKeys.reviews])
         showSuccessMsg('Review Deleted Successfully!')
      },
      onError: () => {
         showErrorMsg('Error while deleting a Review!')
      },
   })
}
