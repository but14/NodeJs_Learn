const {response} = require('express')
const Product = require('../models/Product')
const {set} = require('mongoose')

const index = (req, res, next) => {
    Product.find()
    .then(response =>{
        res.json(response =>{
            res.json({
                response
            })
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}


const show = (req, res, next) => {
    let ProductID = req.body.ProductID
    Product.findById(ProductID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(res => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const store = (req, res, next) => {
    let product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
    product.save()
    .then(response => {
        res.json({
            message: 'Product added successfully!'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}


module.exports = {
    index,store, show
}