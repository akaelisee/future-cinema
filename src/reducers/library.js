/* eslint-disable no-case-declarations */
import { ADD_LIBRARY, REMOVE_LIBRARY } from '../actions/library'

const initialState = {
  productLibrary: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_LIBRARY:
      return {
        ...state,
        productLibrary: [...state.productLibrary, action.payload.product]
      }
    case REMOVE_LIBRARY:
      return {
        ...state,
        productLibrary: state.productLibrary.filter(
          item => item.id !== action.payload.product
        )
      }
    default:
      return state
  }
}
