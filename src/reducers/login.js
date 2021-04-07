import { POST_LOGIN } from '../actions/login'

const initialState = { userLogin: [] }

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case POST_LOGIN: {
      return {
        ...state,
        userLogin: action.payload
      }
    }
    default:
      return state
  }
}
