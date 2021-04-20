import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const SingleProduct = ({ match, products, fetched, fetching }) => {
    console.log(fetched, fetching)
    let singleProd = fetched ? products.find(product => product.id === Number(match.params.id)) : "no data"

    return (
        <div>
            <Link to="/">Back</Link>
            <p>{singleProd.id}</p>
            <h2>{singleProd.name}</h2>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        products: state.products,
        fetched: state.fetched,
        fetching: state.fetching
    }

}



export default connect(mapStateToProps)(SingleProduct)
