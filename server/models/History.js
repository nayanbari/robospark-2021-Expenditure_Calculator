const mongoose = require('mongoose');

const HistorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    time: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('History', HistorySchema)