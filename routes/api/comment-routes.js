const router = require('express').Router();
//Import the methos from the comment-controller file 
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');



// /api/comments/<pizzaId>
router
    .route('/:pizzaId')
    .post(addComment);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment);

//delete route to handle removeReply

router
    .route(':/pizzaId/:commentId/:replyId')
    .delete(removeReply);


module.exports = router;