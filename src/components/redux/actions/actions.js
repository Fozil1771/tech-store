import { ADD_QUANTITY, ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY } from './actionTypes'

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    }
}

export const removeItem = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    }
}