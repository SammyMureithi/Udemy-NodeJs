const express = require( 'express' );
const dotenv = require( 'dotenv' );
const cors = require( 'cors' );
const dbConnection = require( './database/connection' );
const ProductRoute = require( './routes/productRoutes' );

dotenv.config();
const app = express();
//Db Connection
dbConnection();

//Cors
app.use( cors() );

//request payLoad middleware
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ) );
const PORT = process.env.PORT || 3003;
app.use( '/api/v1/products', ProductRoute );
app.get( '/', ( req, res, next ) => {
    res.send('Hello world ....jkdk')
})
app.listen( 3000, () => {
    console.log( `Listening to port 3000` );
});