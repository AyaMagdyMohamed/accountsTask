var express=require("express");
var mongoose = require('mongoose')
var router=express.Router();
var accountsController = require('../controllers/accountController')

router.get("/",function(req,resp){
    accountsController.getAccounts().then(data=>{
       // console.log("data", data)
        resp.json(data)
    
    })
})

module.exports = router
