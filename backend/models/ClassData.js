const mongoose = require('mongoose');
const ClassSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String,
    },
    hour: {
        required: true,
        type: Number,
    },
    img: {
        type: String,
    },
    grade: {
        required: true,
        type: String
    },
    _id: {
        required: true,
        type: Number,
    }
});

module.exports = ClassData = mongoose.model('classData', ClassSchema, 'HopeTracker');