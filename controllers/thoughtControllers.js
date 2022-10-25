const Thought = require('../model/Thought');
const { ObjectId } = require('mongoose').Types;

module.exports = {
    getAllThoughts(req, res) {
        //get all thoughts
        Thought.find()
        .then((thoughts) => res.json(thoughts))
        .catch((err) => res.json(err) )
    },
    addThought(req, res) {
        //add thought
        /*body
            thoughtText:
            username:
            userId:
        */
       Thought.create(req.body)
       .then((result) => res.json(result))
       .catch((err) => res.json(err))
    },
    getOneThought(req, res) {
        //get one thought
        Thought.findOne({ _id: ObjectId(req.params.thoughtId)})
        .then((thought) => {
            !thought
                ? res.status(404).json({message: 'No thought found'})
                : res.json(thought)})
        .catch((err) => res.json(err))
    },
    updateThought(req, res) {
        //update :thoughtId
        /*body
        thoughtText:
        username:
        userId:
        */
        Thought.findOneAndUpdate({ _id: ObjectId(req.params.thoughtId)}, {$set: req.body}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    },
    deleteThought(req, res) {
        //delete :thoughtId
        Thought.findOneAndDelete({ _id: ObjectId(req.params.thoughtId)})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    },
    addReaction(req, res) {
        //add reaction :thoughtId
        /*body
        reactionBody:
        username:
        */
        Thought.findOneAndUpdate({ _id: ObjectId(req.params.thoughtId)}, {$push: {reactions: req.body}}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
   },
    deleteReaction(req, res) {
        //delete :reactionId from :thoughtId
        Thought.findOneAndUpdate({ _id: ObjectId(req.params.thoughtId)}, {$pull: {reactions: {reactionId: req.params.reactionId}}}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    }
}