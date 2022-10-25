const router = require('express').Router();
const { getAllThoughts,
        getOneThought,
        addThought,
        updateThought,
        deleteThought,
        addReaction,
        deleteReaction } = require('../../controllers/thoughtControllers')

// /api/thoughts
router.route('/')
    .get(getAllThoughts)
    .post(addThought)


router.route('/:thoughtId')
    .get(getOneThought)
    .put(updateThought)
    .delete(deleteThought)

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
    .post(addReaction)

// /api/thoughts/:thoughtId/reactions/reactionId
router.route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction)

module.exports = router;
