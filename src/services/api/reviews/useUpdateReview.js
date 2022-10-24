import { useMutation } from 'react-query'
import { showSuccessMsg } from '../../../functions/notifications'
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
export const updateReview = async (formData, token, reviewId) => {
   console.log('useUpdateReview.js ~ 14 reviewId', reviewId)
   console.log('useUpdateReview.js ~ 14 token', token)
   const response = await client.put(
      `/review/${reviewId}`,
      formData,
      getConfig(token),
   )
   const { data } = response
   return data
}

export function useUpdateReview(reviewId) {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((formData) => updateReview(formData, token, reviewId), {
      // When mutate is called:
      onMutate: async (newReview) => {
         // Cancel any outgoing refetches (so they don't overwrite our optimistic update)
         await queryClient.cancelQueries([queryKeys.reviews, newReview.id])

         // Snapshot the previous value
         const previewReviews = queryClient.getQueryData([
            queryKeys.reviews,
            newReview.id,
         ])

         // Optimistically update to the new value
         queryClient.setQueryData([queryKeys.reviews, newReview.id], newReview)

         // Return a context with the previous and new todo
         return { previewReviews, newReview }
      },
      // If the mutation fails, use the context we returned above
      onError: (err, newReview, context) => {
         queryClient.setQueryData(
            [queryKeys.reviews, context.newReview.id],
            context.previewReviews,
         )
      },
      onSuccess: () => {
         showSuccessMsg('Review Updated Successfully!')
      },
      // Always refetch after error or success:
      onSettled: (newReview) => {
         queryClient.invalidateQueries([queryKeys.reviews, newReview.id])
      },
   })
}
