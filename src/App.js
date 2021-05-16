/* eslint-disable react/prop-types */
import React from 'react'
import { connect } from 'react-redux'

/// components

import MainPage from './components/ui/MainPage'
import Navbar from './components/ui/navbar/Navbar'
import Spinner from './components/ui/Loader'
import { Route, Switch } from 'react-router-dom'
import SingleProduct from './components/ui/detailPage/SingleProduct'
import BlogPage from './components/ui/blogs/BlogPage'
import Cart from './components/ui/Cart/Cart'
import ScrollToTop from './components/ScrollToTop'
import NotFound from './components/NotFound'
import UserProfile from './components/ui/user/UserProfile'



function App({ fetching }) {


  return (

    <div className="App">
      <ScrollToTop />

      {fetching ? <Spinner /> :
        <>

          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/product/:status/:id" component={SingleProduct} />
            <Route exact path="/blogs/blog/:id" component={BlogPage} />
            <Route exact path="/profile" component={UserProfile} />
            <Route component={NotFound} />

          </Switch>
        </>
      }
    </div>

  );
}

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching
  }
}


export default connect(mapStateToProps)(App);
