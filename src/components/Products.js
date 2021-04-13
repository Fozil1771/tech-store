import React from 'react'
import { connect } from 'react-redux'
import CardBlock from './cards-ui/CardBlock'


const Products = (props) => {

    return (
        <div>
            {props.products.map(product => {
                return <CardBlock key={product.id} name={product.name} />
            })}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);