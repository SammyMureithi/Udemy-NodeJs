const Product = require( '../database/models/ProductModel' );
const { formatMongoDta } = require( '../helper/dbHelper' );
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