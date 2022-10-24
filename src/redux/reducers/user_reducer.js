import { SET_USER } from '../constants'

const initialState = {
   user: null,
}
export const user = (state = initialState, action) => {
   switch (action.type) {
      case SET_USER:
         return { ...state, user: action.payload }
      default:
         return state
   }
}
