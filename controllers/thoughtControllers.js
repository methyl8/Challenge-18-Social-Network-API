const Thought = require('../model/Thought');

module.exports = {
    getAllThoughts(req, res) {
        //get all thoughts
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.json(err) )
    },
    addThought(req, res) {
        //add thought
    },
    getOneThought(req, res) {
        //get one thought
        Thought.findOne({ _id: req.body.thoughtId})
        .then((thought) => res.json(thought))
        .catch((err) => res.json(err))
    },
    updateThought(req, res) {
        //update :thoughtId
    },
    deleteThought(req, res) {
        //delete :thoughtId
    },
    addReaction(req, res) {
        //add reaction :thoughtId
    },
    deleteReaction(req, res) {
        //delete :reactionId from :thoughtId
    }
}