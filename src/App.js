/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'

import './assets/sass/main.scss'

/// components

import Navbar from './components/navbar/navbar'
import Products from './components/Products'

import Spinner from './components/Loader'


function App({ fetching }) {


  return (
    <div className="App">

      {fetching ? <Spinner /> : ''}

      <Navbar />
      <h1>Initial sssss</h1>
      <Products />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching
  }
}


export default connect(mapStateToProps)(App);
