const router=require('express').Router();
let Product=require('../models/product.model');

router.route('/').get((req,res) =>{
  Product.find()
    .then(product =>res.json(product))
    .catch(err =>res.status(400).json('Error')+err)
});

router.route('/add').post((req,res) =>{
  const name=req.body.name;
  const description=req.body.description;
  const price=req.body.price;
  const category=req.body.category;
  const from=req.body.from;
  const state=req.body.state;
  const discount=req.body.discount;
  const newproduct = new Product({name,description,price,category,from,state,discount});

  newproduct.save()
      .then(() => res.json('Product added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req,res) =>{
  Product.findById(req.params.id)
      .then(product =>res.json(product))
      .catch(err =>res.status(400).json('Error')+err)
});

router.route('/update/:id').post((req,res) =>{
  Product.findById(req.params.id)
      .then(product => {
        product.discount = req.body.discount;

        product.save()
            .then(() => res.json('Product updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error')+err)
});

module.exports=router;


