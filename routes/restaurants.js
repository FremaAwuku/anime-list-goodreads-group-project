const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const { csrfProtection, asyncHandler, userValidators } = require('./utils');
const db = require('../db/models');
const { loginUser } = require('../auth')

router.get("/", asyncHandler(async(req,res)=>{
const restaurants = await db.Restaurant.findAll()

res.render('restaurants',{
    title:"Restaurants",
    restaurants
})

}))

//TODO made ONLY accesible by the admin
router.get("/new", asyncHandler(async(req,res)=>{
    const restaurants = await db.Restaurant.findAll()

    res.render('create-new-restaurant',{
        title:"Restaurants",
        restaurants
    })

    }))


module.exports=router
