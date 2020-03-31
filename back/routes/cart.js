const express = require("express");
const router = express.Router();
const ProductData = require("../models/productData")
const Order = require("../models/order")
const Product = require("../models/product")




 

router.get("/getDataProducts",function(req,res){
    
    ProductData.findAll({
        where:{
            userId:req.user.id
        }
    }).then((productsData)=>{
        const dataToSend = productsData.sort(function (a, b) {
             return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(); 
         });
      
         res.json(dataToSend)
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