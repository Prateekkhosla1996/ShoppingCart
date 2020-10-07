const Product = require('../../db').Product
const route = require('express').Router()

route.get('/',(req,res)=>{
    Product.findAll()
    .then((products)=>{
        res.status(200).send(products)
    }).catch((err)=>{
        res.status(500).send({
            error:"unable to fetch the products"
        })
    })
})
route.post('/', (req,res)=>{
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error:"price is not valid"
        })
    }
    Product.create({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:parseFloat(req.body.price)
    })
    .then((product)=>{
        res.status(201).send(product)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"unable to send the product to db"
        })
    })
})

exports = module.exports= route