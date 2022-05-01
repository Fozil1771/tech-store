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
    axios.get('https://gist.githubusercontent.com/Fozil1771/86d91a65fd98b88dc2abf1867f361b27/raw/a4c522b99afe3eacf88879f9ac70d60f1d0de613/data')
        .then((response) => {
            disptach({ type: SUCCESS_RPODUCTS, payload: response.data })

        }).catch((err) => {
            disptach({ type: FAIL_RPODUCTS, payload: err })
        })

})



export default store;