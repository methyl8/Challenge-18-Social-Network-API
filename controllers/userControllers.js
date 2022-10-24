const User = require('../model/User')


module.exports = {

    getAllUsers(req, res) {
        //getAllUsers
        User.find()
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    addUser(req, res) {
        //add user
    },

    getOneUser(req, res) {
        //get one user
        User.findOne({ _id: req.params.userid })
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    updateUser(req, res) {
        //update user
    },

    deleteUser(req, res) {
        //delete user
    },

    getFriends(req, res) {
        //get friends
    },
    
    deleteFriend(req, res) {
        //delete friend
    }
}