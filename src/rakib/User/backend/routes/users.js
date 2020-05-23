
const router=require('express').Router();
let User=require('../models/product.model');

router.route('/').get((req,res) =>{
    User.find()
        .then(user =>res.json(user))
        .catch(err =>res.status(400).json('Error')+err)
});

router.route('/add').post((req,res) =>{
    User.findOneAndUpdate({},
        {
            $push:{
                cart:{
                    quantity: 1

                }
            }
        },
        {new: true},
        (err, userInfo) =>{
        if(err) return res.json({success:false,err});
        res.status(200).json(userInfo.cart)
        }
        );
})

module.exports=router;