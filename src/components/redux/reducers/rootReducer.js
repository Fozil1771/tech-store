import axios from 'axios'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { FAIL_RPODUCTS, FETCH_PRODUCTS, SUCCESS_RPODUCTS } from '../actions/actionTypes'
import { cartReducer } from './reducers'
// import data from '../../../../data.json'

//connecting middlewares 
const middleware = applyMiddleware(thunk)
const store = createStore(cartReducer, middleware)





// making api call

store.dispatch((disptach) => {

    disptach({ type: FETCH_PRODUCTS })
    axios.get('https://raw.githubusercontent.com/Fozil1771/dataJson/master/data.json')
        .then((response) => {
            disptach({ type: SUCCESS_RPODUCTS, payload: response.data })

        }).catch((err) => {
            disptach({ type: FAIL_RPODUCTS, payload: err })
        })

})



export default store;