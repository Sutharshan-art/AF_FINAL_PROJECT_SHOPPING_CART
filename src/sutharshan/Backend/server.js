const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const port=process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = "mongodb+srv://user30:user_30@cluster0-udmfl.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true , useUnifiedTopology:true}
);

const connection = mongoose.connection;
connection.once('open',function()  {
    console.log("MongoDB database connection established successfully");
});

const userRoutes=require('./Routes/users');
const categoryRoutes =require('./Routes/categories');
const registerRoutes =require('./Routes/register');

app.use('/users',userRoutes);
app.use('/categories',categoryRoutes);
app.use('/register',registerRoutes);

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});


