const mongoose = require( 'mongoose' );
module.exports = async () => {
    try {
        await mongoose.connect( process.env.DB_URL, { useNewUrlParser:true } );
        console.log( 'Database Connection Successfully' );
    }
    catch ( err ) {
        console.log( 'Database Connectivity Error', err );
        throw new Error( err );
    }
 
}