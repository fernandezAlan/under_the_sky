const express = require("express");
const router = express.Router();
const ProductData = require("../models/productData")
const Order = require("../models/order")
const Product = require("../models/product")


router.get("/getDataProducts",function(req,res){
    console.log("llegue")
    ProductData.findAll({
        where:{
            userId:req.user.id
        }
    }).then((productsData)=>{
        console.log("productsData:",productsData)
        res.send(productsData)
    })
})
  
    
                
                
            
           
            



router.delete("/delete/:id",function(req,res){
    ProductData.findByPk(req.params.id)
    .then((productData)=>{
        productData.destroy()
    }).then(()=>{
        res.sendStatus(204)
    })

})
module.exports= router