import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let skillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    coolness: {
        type: Number,
        required: true
    },
    skillLevel: {
        type: Number,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    flex: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Skill', skillSchema);
