const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema({
    title: {
        type: String,
        required: true,
        maxLength: 255,
    },
    description: {
        type: String,
        default: '',
        maxLength: 600,
    },
    image: {
        type: String,
    },
    slug: {
        type: String,
        slug: "title",
        unique: true,
    },
    videoId: {
        type: String,
        default: '',
    },
    level: {
        type: String,
    },
}, {
    timestamps: true,
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
// -> collection: courses