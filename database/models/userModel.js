const mongoose = require( 'mongoose' );
const userSchema = new mongoose.Schema( {
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    }
}, {
    timestamps:true,
    toObject: {
        transform: function ( doc,ret, options){
            ret.id = ret._id;
            delete ret._id;
            delete ret.password;
            delete ret.__v;
            return ret
        }
    }
})
const User = mongoose.model( 'User', userSchema );
module.exports=User