import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Landing from './Landing.jsx'
import Signup from './LoginActual.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <BrowserRouter>
  <App />    
  </BrowserRouter>,
  document.getElementById('root')
);
