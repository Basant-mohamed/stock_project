
const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : { 
        type: String,
        required : true,
        minlength : 3
        } ,
    email : {
        type : String,
        required : true ,
        unique : true
    } ,
    password : {
       type: String,
       minlength : 6 ,
       maxlength : 10
    } ,
    role : {
        type :String  ,
        enum : ['admin' , 'manger' , 'client']
    }
})

const userModel = mongoose.model('User' , userSchema)
module.exports = userModel