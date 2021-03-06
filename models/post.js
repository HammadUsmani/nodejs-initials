const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true

    },
    Content: {
        type: String,
        required: true
    },
    creator: {
        type: Object,
        required: String
    }
},
    { timestamps: true }
);

module.exports = mongoose.model('post', postSchema);