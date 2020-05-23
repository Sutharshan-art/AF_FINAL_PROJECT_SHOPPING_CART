const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const userSchema=new Schema({

    cart:{
        type: Array,
        default:[]
    },


}, {timestamps:true})


const User=mongoose.model('UserCar',userSchema);
module.exports=User;
