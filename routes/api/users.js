const User = require('../../db').User
const route = require('express').Router()
route.get('/',(req,res)=>{
    User.findAll()
        .then((users)=>{
            res.status(200).send(users)
        })
        .catch((err)=>{
            res.status(500).send({
                error:"unable to retrive the users"
            })
        })
})

route.post('/',(req,res)=>{
    User.create({
        name: req.body.name
    }).then((user)=>{
        res.status(201).send(user)
    }).catch((err)=>{
        console.log(err)
        res.status(501).send({
            error:"unable to add the user"
        })
    })
})
exports = module.exports = route