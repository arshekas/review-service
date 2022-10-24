import { useMutation } from 'react-query'
import { showErrorMsg, showSuccessMsg } from '../../../functions/notifications'
import { client, getClientConfig } from '../client'
import { queryKeys } from '../react-query/queryKeys'
import { queryClient } from '../react-query/queryClient'
import useStorage from '../../../hooks/useStorage'

export const addReview = async (formData, token) => {
   const response = await client.post(
      '/review',
      formData,
      getClientConfig(token),
   )
   const { data } = response
   return data
}

export function useCreateReview() {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((formData) => addReview(formData, token), {
      onSuccess: () => {
         // refetching the updated reviews
         queryClient.invalidateQueries([queryKeys.reviews])
         showSuccessMsg('Review Created Successfully!')
      },
      onError: (err) => {
         showErrorMsg('Error while creating a review!')
      },
   })
}
