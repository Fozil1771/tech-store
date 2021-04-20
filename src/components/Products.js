import React from 'react'
import { connect } from 'react-redux'
import { Link, Route } from 'react-router-dom'
// import CardBlock from './cards-ui/CardBlock'
import SingleProduct from './SingleProduct'



const Products = ({ products, fetched }) => {
    return (

        <div>
            {fetched && products != null ? products.map(product => {
                return <div key={product.id}><Link to={`/product/${product.id}`}>{product.name}</Link></div>
            }) : 'no data'}


            <Route exact path="/product/id" component={SingleProduct} />

        </div>


    )
}



const mapStateToProps = (state) => {
    return {
        products: state.products,
        fetched: state.fetched
    }
}


export default connect(mapStateToProps)(Products);