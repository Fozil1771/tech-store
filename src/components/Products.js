import React from 'react'
import { connect } from 'react-redux'
import CardBlock from './ui/cards/CardBlock'




const Products = ({ products, fetched }) => {
    return (

        <div>
            {fetched && products != null ? products.map(product => {
                return <CardBlock key={product.id} inStock={product.inStock} name={product.name} oldPrice={product.oldPrice} />
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