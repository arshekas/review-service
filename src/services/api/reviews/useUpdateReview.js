import { useMutation } from 'react-query'
import { showSuccessMsg } from '../../../functions/notifications'
import useStorage from '../../../hooks/useStorage'
import { client, getClientConfig } from '../client'
import { queryClient } from '../react-query/queryClient'
import { queryKeys } from '../react-query/queryKeys'

export const updateReview = async (formData, token, reviewId) => {
   const response = await client.put(
      `/review/${reviewId}`,
      formData,
      getClientConfig(token),
   )
   const { data } = response
   return data
}

export function useUpdateReview(reviewId) {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((formData) => updateReview(formData, token, reviewId), {
      onSuccess: () => {
         showSuccessMsg('Review Updated Successfully!')
      },
      onError: () => {
         showSuccessMsg('Error while updating a review!')
      },
      // Always refetch after error or success
      onSettled: () => {
         queryClient.invalidateQueries([queryKeys.reviews])
      },
   })
}
