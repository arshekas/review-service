import axios from 'axios'

export const client = axios.create({
   baseURL: 'https://api.dev-fe-1.interview.jobs.music-link.us',
})

export const getClientConfig = (token) => {
   return {
      headers: {
         Authorization: `Bearer ${token}`,
      },
   }
}
