export const ADD_CARD = 'ADD_CARD'
export const REMOVE_CARD = 'REMOVE_CARD'
export const CLEAR_CARD = 'CLEAR_CARD'

export const addCard = (product, color, dimension) => ({
  type: ADD_CARD,
  payload: {
    product: { ...product, choosenColor: color, choosenDimension: dimension }
  }
})

export const removeCard = product => ({
  type: REMOVE_CARD,
  payload: {
    product: product.id || product._id
  }
})

export const allRemoveCard = product => ({
  type: CLEAR_CARD,
  payload: {
    product: product
  }
})
