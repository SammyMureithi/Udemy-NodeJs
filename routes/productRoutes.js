const express = require( 'express' );
const productContoller = require( '../controller/productController' );
const JoiSchemaValidation = require( '../middleware/joiSchemaValidation' );
const productRoute = express.Router();
const ProductSchema = require( '../apiSchema/productSchema' );
productRoute.post( '/',
    JoiSchemaValidation.validateBody( ProductSchema.createProductSchema ),
    productContoller.createProduct );
productRoute.get( '/',
JoiSchemaValidation.validateQueryParams( ProductSchema.getAllProductsSchema),
    productContoller.getAllProducts );    
module.exports = productRoute;