import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Error from "./pages/Error";
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Navbar from "./Components/Navbar";

import {Route, Switch} from 'react-router-dom'
import ProductDetails from "./pages/productDetails";
import EachProduct from "./pages/EachProduct";
import Cart from "./pages/Cart";
import BuyNow from "./pages/BuyNow";
import Individualproduct from "./pages/Individualproduct";


function App() {
  return (
    <>
        <Navbar/>
      <Switch>
          <Route exact path="/" component={ProductDetails}/>
          <Route exact path="/Product/" component={Product}/>
          <Route exact path="/AddProduct/" component={AddProduct}/>
          <Route exact path="/EachProduct/:_id" component={EachProduct}/>
          <Route exact path="/Cart/" component={Cart}/>
          <Route exact path="/BuyNow/:_id" component={BuyNow}/>
          <Route exact path={"/Individualproduct/:_id"} component={Individualproduct}/>
          <Route exact path="/Phone/:slug" component={Phone}/>
          <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
