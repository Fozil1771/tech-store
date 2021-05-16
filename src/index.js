import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';

//style imports
import 'normalize.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './styles/sass/main.scss'

//store
import store from './components/redux/reducers/rootReducer';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
