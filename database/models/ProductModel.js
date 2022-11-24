const mongoose = require( 'mongoose' );
const productSchema = new mongoose.Schema( {
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    brand: {
        type: String,
        required:true
    }
}, {
    toObject: {
        transform: function ( doc,ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret
        }
    }
})
const Product = mongoose.model( 'Products', productSchema );
module.exports=Product