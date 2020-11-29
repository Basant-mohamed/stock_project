const mongoose = require('mongoose')

const Cart = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
  /*   products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true
    }], */
    // products [{prodId : hgsufhi , amount : 3} , {prodId : hgsufhi , amount : 3} , {prodId : hgsufhi , amount : 3} ]
    products : [{
        prodId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Product',
            required : true
        },
        amount : {
            type : Number ,
            required: true
        }
    }],
    date : {
        type : Date ,
        default : Date.now
    },
})

const cartModel = mongoose.model('Cart' , Cart)
module.exports = cartModel