export const ADD_LIBRARY = 'ADD_LIBRARY'
export const REMOVE_LIBRARY = 'REMOVE_LIBRARY'

export const addLibrary = product => ({
  type: ADD_LIBRARY,
  payload: {
    product: product
  }
})

export const removeLibrary = product => ({
  type: REMOVE_LIBRARY,
  payload: {
    product: product
  }
})
