const UserService = require( "../Service/userService" );
const Constants = require( '../constants/index' );

module.exports.signUp = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await UserService.signUp( req.body );
        response.status = 200;
        response.message = Constants.userMessage.USER_CREATED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong:Create User', error );
    }
    return res.status( response.status ).send( response );
}
module.exports.login = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await UserService.login( req.body );
        response.status = 200;
        response.message = Constants.userMessage.LOGIN_SUCCESS;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong:Create User', error );
    }
    return res.status( response.status ).send( response );
}