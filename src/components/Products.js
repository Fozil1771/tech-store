import React from 'react'
import { connect } from 'react-redux'
import CardBlock from './cards-ui/CardBlock'




const Products = ({ products, fetched }) => {
    return (

        <div>
            {fetched && products != null ? products.map(product => {
                return <div>{product.name}</div>
            }) : 'no data'}
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