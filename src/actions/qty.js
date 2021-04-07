export const INCREMENT_QTY = 'INCREMENT_QTY'
export const DECREMENT_QTY = 'DECREMENT_QTY'

export const IncrementQty = productId => ({
  type: INCREMENT_QTY,
  payload: {
    id: productId
  }
})

export const DecrementQty = productId => ({
  type: DECREMENT_QTY,
  payload: {
    id: productId
  }
})
