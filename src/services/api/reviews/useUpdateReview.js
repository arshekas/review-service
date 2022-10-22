import { useMutation } from 'react-query'
import { showErrorMsg, showSuccessMsg } from '../../functions/notification'
import client from '../client'
import { queryClient } from '../react-query/queryClient'
import { queryKeys } from '../react-query/queryConstants'

export const addPerson = async (formData) => {
   try {
      const response = await client.post('/people', formData)
      const { data } = response
      return data
   } catch (err) {
      err.response.data?.email && showErrorMsg('Email is already taken!')
      throw new Error(err)
   }
}

export function useCreatePerson() {
   return useMutation((formData) => addPerson(formData), {
      onSuccess: () => {
         queryClient.invalidateQueries([queryKeys.people])
         showSuccessMsg('Person Created Successfully!')
      },
      onError: (err) => {
         console.log('useCreatePerson.js ~ 27 err', err)
      },
   })
}
