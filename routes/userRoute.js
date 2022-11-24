const express = require( 'express' );
const UserRoute = express.Router();
const UserContoler = require( '../controller/userContoller' );
const joiSchemaValidation = require( '../middleware/joiSchemaValidation' );
const userSchema = require( '../apiSchema/userSchema' );
const tokenValidation = require( '../middleware/tokenValidation' );
UserRoute.post( '/SignUp',
    joiSchemaValidation.validateBody( userSchema.signup ),
    UserContoler.signUp );
UserRoute.post( '/Login',
        
    joiSchemaValidation.validateBody( userSchema.login ),
    UserContoler.login );

module.exports = UserRoute;