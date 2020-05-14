import React from 'react';

import './App.css';
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Error from "./pages/Error";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Navbar from "./Components/Navbar";

import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <>
        <Navbar/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Product/" component={Product}/>
          <Route exact path="/AddProduct/" component={AddProduct}/>
          <Route exact path="/Phone/:slug" component={Phone}/>
          <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
