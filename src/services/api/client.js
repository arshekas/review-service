import axios from 'axios'

const client = axios.create({
   baseURL: 'https://api.dev-fe-1.interview.jobs.music-link.us',
})

export default client
