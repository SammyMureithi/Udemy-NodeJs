const User = require( '../database/models/userModel' );
const Constants = require( '../constants/index' );
const bcrypt = require( 'bcrypt' );
const jwt = require( 'jsonwebtoken' );
const { formatMongoDta } = require( '../helper/dbHelper' );
module.exports.signUp = async ( {email,password} ) => {
    try {
        const user = await User.findOne( { email } );
        if ( user ) {
            throw new Error(Constants.userMessage.USER_ALREADY_EXISTS)
        }
        const salt = await bcrypt.genSalt( 12 );
       password = await bcrypt.hash( password, salt );
        const newUser = new User( {
            email,
            password
        } );
        const result1 = await newUser.save();
        return formatMongoDta(result1);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :Create User", err );
        throw new Error(err)
    }
    
}
module.exports.login = async ( {email,password} ) => {
    try {
        const user = await User.findOne( { email } );
        if ( !user ) {
            throw new Error( Constants.userMessage.USER_INVALID );
        }
        const validPassword =await bcrypt.compare( password, user.password );
        if ( !validPassword ) {
            throw new Error( Constants.userMessage.USER_INVALID );
        }
        const token = jwt.sign( { id: user._id }, process.env.SECRET_KEY || 'my-secret-key', { expiresIn: "1d" } );
        return {token}
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :Login User", err );
        throw new Error(err)
    }
    
}