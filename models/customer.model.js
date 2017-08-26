//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var customerSchema = new Schema({
    name: String,
    address: String,
    email: String,
    order: [{ productType: String, productSpec: String }]
});

// the schema is useless so far
// we need to create a model using it
var customer = mongoose.model('customer', customerSchema);

// make this available to our users in our Node applications
module.exports = customer;
