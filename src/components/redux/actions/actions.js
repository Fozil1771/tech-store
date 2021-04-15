import { FAIL_RPODUCTS, FETCH_PRODUCTS, SUCCESS_RPODUCTS } from './actionTypes'



const initialState = {
    addItem: 0,
    total: 0,
    fetching: false,
    fetched: false,
    products: null,
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
                products: action.payload,

            }
        }
        default:
            return state;
    }
}
