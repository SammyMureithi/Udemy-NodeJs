const Joi = require( '@hapi/joi' );
const validateObjectSchema = (data,schema) => {
    const result = schema.validate( data );
    if ( result.error ) {
        let errorDetails = result.error.details.map( value => {
            return {
               value
            }
        } );
        return true;
    }
    return false;
    
   
} 
module.exports.validateBody = ( schema ) => {
    return ( req, res, next )=>{
        const errorResult = validateObjectSchema( req.body, schema );
        if ( errorResult ) {
            res.send( { error: true, message: "Invalid Fields or Field Types " } );
        }
        else {
            next();
        }
    }
}
module.exports.validateQueryParams = ( schema ) => {
    return ( req, res, next )=>{
        const errorResult = validateObjectSchema( req.query, schema );
        if ( errorResult ) {
            res.send( { error: true, message: "Invalid Query Parameters " } );
        }
        else {
            next();
        }
    }
}