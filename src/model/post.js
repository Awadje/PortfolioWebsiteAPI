import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    flex: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Post', postSchema);
