const express = require( 'express' );
const productContoller = require( '../controller/productController' );
const JoiSchemaValidation = require( '../middleware/joiSchemaValidation' );
const tokenValidation = require( "../middleware/tokenValidation" );
const productRoute = express.Router();
const ProductSchema = require( '../apiSchema/productSchema' );
productRoute.post( '/',
tokenValidation.validateToken,
    JoiSchemaValidation.validateBody( ProductSchema.createProductSchema ),
    productContoller.createProduct );
productRoute.get( '/:id',tokenValidation.validateToken, productContoller.getProductById );
productRoute.delete( '/:id',tokenValidation.validateToken, productContoller.deleteProduct );
productRoute.put( '/:id',
tokenValidation.validateToken,
    JoiSchemaValidation.validateBody( ProductSchema.updateProductSchema ),
    productContoller.updateProduct );
productRoute.get( '/',
tokenValidation.validateToken,
JoiSchemaValidation.validateQueryParams( ProductSchema.getAllProductsSchema),
    productContoller.getAllProducts );    
module.exports = productRoute;