const {Schema, model } = require('mongoose')

const CommentSchema = new Schema({
    writtenBy: {
        type: String
    },
    commentBody: {
        type: String
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
});

//create Comment model using the CommentSchema
const Comment = model('Comment', CommentSchema);

//export the Comment model
module.exports = Comment;