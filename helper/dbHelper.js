const mongoose = require( 'mongoose' );
module.exports.formatMongoDta = ( data ) => {
    if ( Array.isArray( data ) ) {
        let dataList=[]
        for ( value of data ) {
            dataList.push( value.toObject() );
        }
        return dataList;
    }
    return data.toObject();
}
module.exports.checkValidId = ( id ) => {
    if ( !mongoose.Types.ObjectId.isValid( id ) ) {
        throw new Error('Id not a valid Id')
    }
}