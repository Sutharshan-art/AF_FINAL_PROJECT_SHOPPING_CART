import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/navbar.component";
import CategoriesList from "./components/categories-list.component";
import CreateCategories from "./components/create-categories.component";
import StoreManagerList from "./components/store-manager-list.component";
import CreateStoreManager from "./components/create-store-manager.component";
import EditStoreManager from "./components/edit-store-manager.component";
import register from "./components/register.component";
import title from "./components/Title";

const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const express = require('express');
const app = express();




//view engine setup
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('/Models/users.models');
});

app.post('/send',(req,res) => {
  const output = `
     <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.first_name}</li>
      <li>${req.body.last_name}</li>
      <li>Email: ${req.body.email}</li>
      <li>Username: ${req.body.username}</li>
      <li>Password: ${req.body.password}</li>
      <li>Phone: ${req.body.mobile}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
     `;


  let transporter = nodemailer.createTransport({
    host:'mail.google.com',
    port:587,
    secure:false,
    auth:{
      user:'sliitsutharshan@gmail.com',
      pass:'Pavalam62'
    },
    tls:{
      rejectUnauthorized:false
    }
  });

  let mailOptions = {
    from:'"Store manager user registration" <sliitsutharshan@gmail.com>',
    to:'shanrajah09@gmail.com',
    subject:'Store manager user registration',
    text:'Hello',
    html:output
  };

  transporter.sendMail(mailOptions,(error,info) => {
    if(error) {
      return console.log(error);
    }
    console.log('Message sent: %s',info.messageId);
    console.log('Preview URL: %s',nodemailer.getTestMessageUrl(info));

    res.render('contact',{msg:'Email has been sent'});
  });
});


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
              <Route path="/title" component={title}/>
              <Route path="/register" component={register}/>
              </div>
          </div>
      </Router>
  );
}

export default App;
