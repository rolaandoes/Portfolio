var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var contactSchema = new Schema({
	fullName: String,
	Email: {type: String, required: true},
	Message: String
});

var contact = mongoose.model('contact', contactSchema);
module.exports = contact;