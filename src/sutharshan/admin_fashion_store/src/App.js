import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import CategoriesList from "./components/categories-list.component";
import CreateCategories from "./components/create-categories.component";
import StoreManagerList from "./components/store-manager-list.component";
import CreateStoreManager from "./components/create-store-manager.component";
import EditStoreManager from "./components/edit-store-manager.component";


function App() {
  return (
      <Router>
          <div className="container">
            <Navbar/>
              <br/>
              <div>
              <Route path="/" exact component={CategoriesList}/>
              <Route path="/create" component={CreateCategories}/>
              <Route path="/store" exact component={StoreManagerList}/>
              <Route path="/edit/:id" component={EditStoreManager}/>
              <Route path="/user" component={CreateStoreManager}/>
              </div>
          </div>
      </Router>
  );
}

export default App;
