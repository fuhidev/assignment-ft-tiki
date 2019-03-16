var mongoose = require('mongoose');
// Setup schema
var schema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});
// Export Contact model
var Book = module.exports = mongoose.model('book', schema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}