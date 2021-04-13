import React from 'react'

import './assets/sass/main.scss'

/// components
import Loader from './components/Loader'
import Products from './components/Products'



function App() {
  return (
    <div className="App">

      <div className="spin-box">
        <Loader />
      </div>



      <h1>Initial sssss</h1>
      <Products />
    </div>
  );
}

export default App;
