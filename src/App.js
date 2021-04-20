/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'

/// components

import Products from './components/Products'
import Navbar from './components/navbar/Navbar'
import Spinner from './components/Loader'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import SingleProduct from './components/SingleProduct'


function App({ fetching }) {


  return (
    <BrowserRouter>
      <div className="App">

        {fetching ? <Spinner /> : ''}

        <Navbar />

        <h1>Initial sssss</h1>
        <Link to="/product">Products</Link>
        <Switch>
          <Route exact path="/product" component={Products} />
          <Route exact path="/product/:id" component={SingleProduct} />
        </Switch>

      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching
  }
}


export default connect(mapStateToProps)(App);
