const mongoose = require('mongoose')

const vendorSchema = new mongoose.Schema({
vendorName : {
    type : String,
    required : true 
},
vendorEmail : {
    type : String,
},
vendorPhone : {
    type : String,
    required:true
},
company : {
    type :String,
    required:true
}
})

const Vendor = mongoose.model('Vendor' , vendorSchema)
module.exports = Vendor