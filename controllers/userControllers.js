const User = require('../model/User')
const { ObjectId } = require('mongoose').Types;


module.exports = {

    getAllUsers(req, res) {
        //getAllUsers
        User.find()
            .populate('friends')
            .then((users) => res.status(200).json(users))
            .catch((err) => res.status(500).json(err));
    },

    addUser(req, res) {
        //add user
        /* body:
            username:
            email:
        */
        User.create(req.body)
        .then((user) =>  res.status(200).json(user))
        .catch((err) => res.status(500).json(err));
  
    },

    getOneUser(req, res) {
        //get one user
        User.findOne({ _id: ObjectId(req.params.userId) })
        .then((user) => {
            !user 
                ? res.status(404).json({message: 'User not found'})
                : res.status(200).json(user)
            })
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        //update :userId
        /* body:
            username:
            email:
        */
        User.findOneAndUpdate({ _id: ObjectId(req.params.userId)}, {$set: req.body}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    },

    deleteUser(req, res) {
        //delete :userId
        User.deleteOne({ _id: ObjectId(req.params.userId) }, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    },

    addFriend(req, res) {
        //add :friendId to :userId
        User.findOneAndUpdate({_id: ObjectId(req.params.userId) }, {$push:{friends: req.params.friendId}}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    },

    deleteFriend(req, res) {
        //delete :friendId from :userId
        User.findOneAndUpdate({_id: ObjectId(req.params.userId) }, {$pull: {friends: req.params.friendId}}, {new: true})
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(500).json(err))
    }
}