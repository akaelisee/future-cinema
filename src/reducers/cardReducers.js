/* eslint-disable no-case-declarations */
import { ADD_CARD, REMOVE_CARD, CLEAR_CARD } from '../actions/cardAction'
import { INCREMENT_QTY, DECREMENT_QTY } from '../actions/qty'

const initialState = {
  productCard: []
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_CARD:
      const findProduct = state.productCard.find(item => {
        return item.id === action.payload.product.id
      })

      if (findProduct) {
        state.productCard.forEach((item, index) => {
          if (findProduct.id === item.id) {
            state.productCard[index].qty += 1
          }
        })
      } else {
        state.productCard = [
          ...state.productCard,
          { ...action.payload.product, qty: 1 }
        ]
      }

      return {
        ...state
      }

    case REMOVE_CARD:
      return {
        ...state,
        productCard: state.productCard.filter(
          item => item.id !== action.payload.product
        )
      }
    case CLEAR_CARD:
      return {
        ...state,
        productCard: []
      }
    case INCREMENT_QTY:
      return {
        ...state,
        productCard: state.productCard.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty + 1 }
          } else {
            return { ...item }
          }
        })
      }
    case DECREMENT_QTY:
      return {
        ...state,
        productCard: state.productCard.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, qty: item.qty == 1 ? item.qty : item.qty - 1 }
          } else {
            return { ...item }
          }
        })
      }
    default:
      return state
  }
}
