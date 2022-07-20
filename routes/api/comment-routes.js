const router = require('express').Router();
//Import the methos from the comment-controller file 
const { addComment, removeComment } = require('../../controllers/comment-controller');

                                                

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
router.route('/:pizzaId/:commentId').delete(removeComment);


module.exports = router;