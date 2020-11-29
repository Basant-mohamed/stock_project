const mongoose = require('mongoose')

const Product = new mongoose.Schema({
    prodName : {
        type : String ,
        required : true ,
    },
    prodCat :{
        type : String ,
        required: true
    },
    prodAmount : {
        type : Number,
        required : true
    },
    prodPrice : {
        type : Number ,
        required : true 
    }
   /*  prodCode : {
        type : String,
        required :true 
    } */
})

const productModel = mongoose.model('Product' , Product)
module.exports = productModel