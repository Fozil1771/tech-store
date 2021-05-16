import { ADD_QUANTITY, ADD_TO_CART, FAIL_RPODUCTS, FETCH_PRODUCTS, REMOVE_FROM_CART, SUB_QUANTITY, SUCCESS_RPODUCTS } from '../actions/actionTypes'



const initialState = {
    addedItems: [],
    total: 0,
    fetching: false,
    fetched: false,
    products: null,
    blogs: null,
    error: null
}



export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS: {
            return {
                ...state,
                fetching: true
            }

        }
        case FAIL_RPODUCTS: {
            return {
                ...state,
                fetched: false,
                error: action.payload
            }

        }
        case SUCCESS_RPODUCTS: {

            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload[0],
                blogs: action.payload[1]

            }
        }

        ///another reducer

        case ADD_TO_CART: {

            let addedItem = state.products.products.find(item => item.id === action.id)
            let existed_item = state.addedItems.find(item => action.id === item.id)

            if (existed_item) {
                addedItem.addedQuantity += 1
                return {
                    ...state,
                    total: state.total + Number(addedItem.price),

                }
            }
            else {
                addedItem.addedQuantity = 1;
                //calculating the total
                let newTotal = state.total + Number(addedItem.price)

                return {
                    ...state,
                    addedItems: [...state.addedItems, addedItem],
                    total: newTotal

                }

            }
        }
        case REMOVE_FROM_CART: {
            let itemToRemove = state.addedItems.find(item => action.id === item.id)
            let new_items = state.addedItems.filter(item => action.id !== item.id)

            //calculating the total
            let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
            console.log(itemToRemove)
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        case ADD_QUANTITY: {
            let addedItem = state.addedItems.find(item => item.id === action.id)
            addedItem.addedQuantity += 1
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

        case SUB_QUANTITY: {
            let addedItem = state.addedItems.find(item => item.id === action.id)
            //if the qt == 0 then it should be removed
            if (addedItem.addedQuantity === 1) {
                let new_items = state.addedItems.filter(item => item.id !== action.id)
                let newTotal = state.total - addedItem.price
                return {
                    ...state,
                    addedItems: new_items,
                    total: newTotal
                }
            }
            else {
                addedItem.addedQuantity -= 1
                let newTotal = state.total - addedItem.price

                return {
                    ...state,
                    total: newTotal
                }
            }

        }
        default:
            return state;
    }
}
