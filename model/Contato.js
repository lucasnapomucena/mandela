const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }

});

mongoose.model('contacts', Contact);