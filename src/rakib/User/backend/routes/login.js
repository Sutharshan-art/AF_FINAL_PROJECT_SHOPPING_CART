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

router.route('/add').post((req,res) =>{
    const usertype=req.body.usertype;
    const username=req.body.username;
    const password=req.body.password;

    const newlogin = new Login({usertype,username,password});

    newlogin.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports=router;
