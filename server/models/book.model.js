var mongoose = require('mongoose');
// Setup schema
var schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default:'N/A'
    },
    price: {
        type: Number,
        default: 0,
        required: true
    },
    sale: {
        type: Number,
        default: 0,
        required:false
    },
    comments: [{
        body: String,
        date: {
            type: Date,
            default: new Date()
        }
    }],
    photo: {
        data: String,
        contentType: String,
        date: {
            type: Date,
            default: new Date()
        }
    }
});

schema.virtual('currentPrice').get(function () {
    return this.price - (this.price * this.sale);
});
// Export Contact model
var Book = module.exports = mongoose.model('book', schema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}