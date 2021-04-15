import React from 'react'
import { connect } from 'react-redux'
import CardBlock from './cards-ui/CardBlock'
import Spinner from './Loader'



const Products = ({ products, fetched, fetching }) => {

    return (
        <div>
            {fetching ? <Spinner /> : products != null ? products.map(product => {
                return <CardBlock key={product.id} name={product.name} />
            }) : 'no data'}

        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.products,
        fetched: state.fetched,
        fetching: state.fetching
    }
}


export default connect(mapStateToProps)(Products);