const Constants = require( '../constants/index' );
const jwt = require( 'jsonwebtoken' );
module.exports.validateToken = (req,res,next) => {
    let response = { ...Constants.defaultServerResponse };
    try {
        if ( !req.headers.authorization ) {
            throw new Error(Constants.requestValidationMessage.TOKEN_MISSING)
        } 
        const token = req.headers.authorization.split( 'Bearer' )[1].trim();
        const decode = jwt.verify( token, process.env.SECRET_KEY || 'my-secret-key' );
      
        return next();
    }
    catch ( error ) {
        response.message = error.message;
        response.status = 401;
        console.log( 'Error', error );
    }
    return res.status( response.status ).send( response );
    
}