import { loginData } from './loginData'

export const checkUserValid = (data) => {
   return loginData.find(
      (user) => data.name === user.name && data.token === user.token,
   )
}
