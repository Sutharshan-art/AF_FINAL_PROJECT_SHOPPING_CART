const router=require('express').Router();
let Login=require('../models/login.model');

router.route('/').get((req,res) =>{
    Login.find()
        .then(login =>res.json(login))
        .catch(err =>res.status(400).json('Error')+err)
});

router.route('/:id').get((req,res) =>{
    Login.findById(req.params.id)
        .then(login =>res.json(login))
        .catch(err =>res.status(400).json('Error')+err)
});

router.route('/login').post((req,res) =>{
    const usertype=req.body.usertype;
    const username=req.body.username;
    const password=req.body.password;

    Login.findOne({username},(err,login) => {
        if(err || login){
            return res.status(500).json({
                error:"invalid username"
            });
        }
        if(!login.authenticate(password)){
            return res.status(500).json({
                error:"Data dont match"
            });
        }
        return res.status(400).send();
    })
});

module.exports=router;
