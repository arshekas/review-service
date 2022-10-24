import { useMutation } from 'react-query'
import { showSuccessMsg } from '../../../functions/notifications'
import client from '../client'
import { queryKeys } from '../react-query/queryKeys'
import { queryClient } from '../react-query/queryClient'
import useStorage from '../../../hooks/useStorage'
const getConfig = (token) => {
   return {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
}
export const addReview = async (formData, token) => {
   console.log('useCreateReview.js ~ 7 formData', formData, getConfig(token))
   const response = await client.post('/review', formData, getConfig(token))
   const { data } = response
   return data
}

export function useCreateReview() {
   const { getItem } = useStorage()
   const token = getItem('token', 'localStorage')
   return useMutation((formData) => addReview(formData, token), {
      onSuccess: () => {
         queryClient.invalidateQueries([queryKeys.reviews])
         showSuccessMsg('Review Created Successfully!')
      },
      onError: (err) => {
         console.log('useCreateReview.js ~ 27 err', err)
      },
   })
}
