import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {store} from "./store";
import {BrowserRouter as Router} from 'react-router-dom';
import App from "./components/app";
import './index.css';

let background = `${process.env.PUBLIC_URL}/images/background.jpg`;

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App bg={background}/>
      </Router>
    </Provider>,
  document.getElementById('app')
);

