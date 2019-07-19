const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Banner = new Schema({

    url: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    alt: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

mongoose.model('banners', Banner);