const express = require('express');
const router = require('express').Router();
const Customer = require('../Models/customers.reg.models');

router.route('/').get((req, res) => {
    Customer.find()
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const email= req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    const repassword = req.body.repassword;
   // const mobile = req.body.mobile;

    const newCustomer = new Customer({
        first_name,
        last_name,
        email,
        username,
        password,
        repassword,
      //  mobile

    });

    newCustomer.save()
        .then(() => res.json('New Customer Registered!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => res.json(Customer))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Customer.findByIdAndDelete(req.params.id)
        .then(() => res.json('Selected customer deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Customer.findById(req.params.id)
        .then(Customer => {
            Customer.first_name = req.body.first_name;
            Customer.last_name = req.body.last_name;
            Customer.email = req.body.email;
            Customer.username = req.body.username;
            Customer.password = req.body.password;
            Customer.repassword = req.body.repassword;
          //  Customer.mobile = req.body.mobile;


            Customer.save()
                .then(() => res.json('Selected customer updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
