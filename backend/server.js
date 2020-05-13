const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://Sutharshan-art:5Dkna1dDQIQZcYjs@cluster0-y82dh.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri,{useNewUrlParser:true, useCreateIndex:true , useUnifiedTopology:true}
);

const connection = mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

app.listen(port, () => {
    console.log("Server is running on port: " + port);
});


