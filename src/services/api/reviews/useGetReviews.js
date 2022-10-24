import { useQuery } from 'react-query'
import client from '../client'
import { queryKeys } from '../react-query/queryKeys'

const token =
   'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJnaElkIjoiYXJzaCIsImlhdCI6MTY2NjM3NjE0MSwiYXVkIjoiYXBpLmRldi1mZS0xLmludGVydmlldy5qb2JzLm11c2ljLWxpbmsudXMiLCJzdWIiOiJ1c2VyMiJ9.J3UP_XiXIq8dBHt7F57pvjedz-54teT0Fv10JOtutkulJZ_zrmODUGFj78hm77AaWuLGPekTVOv-_CU-fUTyvINVB8_fgIYUryWR6_m5Qfwt8_j2kAE76M55X3Cf7JoLzOU3RXEFIhn-M4xbSPUmRHNjckpf3ilX-4HYITOm2_h66HPBmLWKdfrA6uWfm5G-1YPCiONNgssm5_cczc61APf7Gy1s5OgeJfmR03stmYgBMW5eFiDy6DP3FwzzxBOQKVpaEc9BYATo4dfeHGOCAAEhoY9Nq3cOr7m-n-gp9qDfmmxKwPGlfUaL8KifIXb68hQwmTRpn9qprTLjf1BqWI6hZSuGn_ZgfsXUcAY9q3fWqcgNiwHTG3kj67lUQSJfBb-58rOsnlvNKipUVLWzGxeEq8DNg_TC6cgdTNF4RgmT6qCEn91ojO5NHLNyPU_Xhfiu8Sj7wdz86c0GLgMPqifzPm3FoU5O0HQNZCybmXwCae7TRT71zS868oxufzlF'
const config = {
   headers: {
      Authorization: `Bearer ${token}`,
   },
}

export const fetchReviews = async () => {
   const response = await client.get(`/review`, config)
   const { data } = response
   return data
}
export function useGetReviews(initialData = [], options = {}) {
   const query = useQuery([queryKeys.reviews], fetchReviews, {
      initialData,
      ...options,
   })
   return {
      ...query,
      data: query.data?.reviews ?? query?.data,
   }
}
