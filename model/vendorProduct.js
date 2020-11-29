const mongoose = require('mongoose')

const vendorProdSchema = new mongoose.Schema({
    vendorId : {
       type :  mongoose.Schema.Types.ObjectId,
       ref : 'Vendor',
       required :true
    },
    products : [
        {
            prodId : {
                type :  mongoose.Schema.Types.ObjectId,
                ref : 'Product',
                required:true
            },
            amount : {
                type:Number,
                required : true
            }

        }
    ],
    date : {
        type : Date,
        required:true ,
        default :Date.now
    },
    totalPrice : {
        type : Number

    }
})

const VendorProducts  = mongoose.model('VendorProducts' , vendorProdSchema)
module.exports = VendorProducts