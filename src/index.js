import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import App from './App';
import { configureStore } from "@reduxjs/toolkit"
import movieReducer from "./Movies/movieSlice"
import Login from './Movies/LogIn';
import {BrowserRouter as Router, Link, 
  Routes, Route} from 'react-router-dom'
import Admin from './Movies/Admin';
import Customer from './Movies/Customer';
import Dashboard from './Movies/Dashboard';
const store=configureStore({
    reducer:{
        movie:movieReducer
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
 <App></App>
    <h1>Hello</h1>
  {/* <App></App> */}
  {/* <Login></Login> */}
  </Provider>
);
