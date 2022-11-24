const Product = require( '../database/models/ProductModel' );

const { formatMongoDta,checkValidId } = require( '../helper/dbHelper' );
module.exports.createProducts = async ( serviceData ) => {
    try {
        let product = new Product( { ...serviceData } );
    const result = await product.save();
        return formatMongoDta(result);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :Create Product", err );
        throw new Error(err)
    }
    
}
module.exports.getAllProducts = async ({limit=10,skip=0} ) => {
    try {
        let products = await Product.find()
            .skip( parseInt( skip ) )
            .limit(parseInt(limit));
        //return result.toObject();
        return formatMongoDta(products);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :getAllProducts", err );
        throw new Error(err)
    }
    
}
module.exports.getProductById = async ( { id } ) => {
    checkValidId( id ) 
    try {
        let product = await Product.findById(id)
        if ( !product ) {
            throw new Error('Product Not Found')
        }
        return formatMongoDta(product);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :getProductById", err );
        throw new Error(err)
    }
    
}
module.exports.updateProduct = async ( { id,updateInfo } ) => {
    
    try {
        checkValidId( id ) 
        let product = await Product.findOneAndUpdate({id},updateInfo,{new:true})
        if ( !product ) {
            throw new Error('Product Not Found')
        }
        return formatMongoDta(product);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :updateProduct", err );
        throw new Error(err)
    }
    
}
module.exports.deleteProduct = async ({id} ) => {
    
    try {
        checkValidId( id ) 
        let product = await Product.findByIdAndDelete( id );
        if ( !product ) {
            throw new Error('Product Not Found')
        }
        return formatMongoDta(product);
    }
    catch ( err ) {
        console.log( "Something went wrong :Service :updateProduct", err );
        throw new Error(err)
    }
    
}