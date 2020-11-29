require('./mongoose/db')

const User = require('./model/user')
const Product = require('./model/product')
const Cart = require('./model/cart')
const Vendor = require('./model/vendor')
const VendorProd = require('./model/vendorProduct')

/* Product.create({prodName : 'tea' , prodCat : 'food' ,   prodAmount : 50 , prodPrice : 5 })
Product.create({prodName : 'suger' , prodCat : 'food' ,   prodAmount : 40 , prodPrice : 15 })
Product.create({prodName : 'coffee' , prodCat : 'food' ,   prodAmount : 60 , prodPrice : 50 })
 */
/* Cart.create({user : '5fb8abe82a0cc263ccac6394' , products:[{ prodId : '5fb964d75977216acca3a83d' , amount : 2} , { prodId : '5fb964d75977216acca3a83e' , amount : 2} ] })
Cart.create({user : '5fb8abe82a0cc263ccac6394' , products:[{ prodId : '5fb964d75977216acca3a83d' , amount : 2} , { prodId : '5fb964d75977216acca3a83e' , amount : 2} , { prodId : '5fb964d75977216acca3a83f' , amount : 2} ] })
Cart.create({user : '5fb8abe82a0cc263ccac6396' , products:[ { prodId : '5fb964d75977216acca3a83e' , amount : 2}]})
 */

/*  Cart.find((err,res)=>{
     if(err) console.log(err)
     else console.log(res)
 }) */
/* Cart.find().populate('user').exec((err,res)=>{
    if(err) console.log(err)
    else console.log(res)
})
 */
/* Cart.find().populate({path:'products.prodId' , select : {'prodAmount' : 1} , model : 'Product'}).exec((err,res)=>{
    if(err) console.log(err)
    else console.log(res[0].products)
})
 */

/*  function userCartData(id)
 {
     Cart.find({user: id} , (err , res)=>{
        if(err) console.log(err)
        else {
            console.log(res[0].products[0].prodId)
            Product.find({_id :res[0].products[0].prodId} , (err,prod)=>{
                if(err) console.log(err)
                else console.log(prod)

            })
        }
     }
     )
 }

 userCartData('5fb8abe82a0cc263ccac6396')
 */