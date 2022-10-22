import { notification } from 'antd'
import { QueryClient } from 'react-query'

// GLOBAL ERROR HANDLER
export function queryErrorHandler(error) {
   // error is type unknown because in js, anything can be an error (e.g. throw(5))
   //   const id = 'react-query-error';
   const title =
      error instanceof Error // remove the initial 'Error: ' that accompanies many errors
         ? error.message.toString().replace(/^Error:\s*/, '')
         : 'error connecting to server'

   notification.error({
      message: title,
   })
}

// QUERY CLIENT FOR APP
export const defaultQueryClientOptions = {
   queries: {
      refetchOnWindowFocus: false,
      // onError: queryErrorHandler,
      // staleTime: 600000, // 10 minutes
      // cacheTime: 900000, // default cacheTime is 5 minutes; doesn't make sense for staleTime to exceed cacheTime
      // refetchOnMount: false,
      refetchOnReconnect: false,
   },
   mutations: {
      onError: queryErrorHandler,
   },
}

export const queryClient = new QueryClient({
   defaultOptions: defaultQueryClientOptions,
})

export const retry = (failureCount, error) => {
   if (failureCount >= 2 || error?.response?.status < 500) return false
   return true
}
