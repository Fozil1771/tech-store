import React from 'react'
import { connect } from 'react-redux'
import CardBlock from './cards-ui/CardBlock'




const Products = ({ products }) => {

    return (
        <div>
            {products != null ? products.map(product => {
                return <CardBlock key={product.id} name={product.name} />
            }) : 'no data'}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        products: state.products,
    }
}


export default connect(mapStateToProps)(Products);