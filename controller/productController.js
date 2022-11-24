const productService = require( "../Service/productService" );
const Constants = require( '../constants/index' );
module.exports.createProduct = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await productService.createProducts( req.body );
        response.status = 200;
        response.message = Constants.productMessage.PRODUCT_CREATED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong:Create Products', error );
    }
    return res.status( response.status ).send( response );
}
module.exports.getAllProducts = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await productService.getAllProducts(req.query );
        response.status = 200;
        response.message = Constants.productMessage.PRODUCT_FETCHED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong: Fetch allProducts', error );
    }
    return res.status( response.status ).send( response );
}
module.exports.getProductById = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await productService.getProductById(req.params );
        response.status = 200;
        response.message = Constants.productMessage.PRODUCT_FETCHED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong: Fetch getProductById', error );
    }
    return res.status( response.status ).send( response );
}
module.exports.updateProduct = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await productService.updateProduct({id:req.params,updateInfo:req.body});
        response.status = 200;
        response.message = Constants.productMessage.PRODUCT_UPDATED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong: Fetch getProductById', error );
    }
    return res.status( response.status ).send( response );
}
module.exports.deleteProduct = async ( req, res ) => {
    let response = {...Constants.defaultServerResponse};
    try {
        const result = await productService.deleteProduct(req.params);
        response.status = 200;
        response.message = Constants.productMessage.PRODUCT_DELETED;
        response.body = result;
    }
    catch ( error ) {
        response.message = error.message;
        console.log( 'Something Went Wrong: Fetch deleteProduct', error );
    }
    return res.status( response.status ).send( response );
}