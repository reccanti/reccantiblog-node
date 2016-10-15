const mongoose = require('mongoose');

/**
 * describes the structure of a Post object
 */
var PostSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    contents: String,
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date,
});

/**
 * Define a method to find posts based on 
 * their ID
 */
PostSchema.findById = function (id, cb) {
    return this.find({ _id: id }, cb);
}

/**
 * Define a method to find Posts based on
 * their title
 */
PostSchema.findByTitle = function (title, cb) {
    return this.find({ title: title }, cb);
};

/**
 * Define the Post model
 */
var Post = mongoose.model('Post', PostSchema);

module.exports = Post;
