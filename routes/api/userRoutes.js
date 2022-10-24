const router = require('express').Router();
const { getAllUsers,
        getOneUser,
        addUser,
        updateUser,
        deleteUser,
        getFriends,
        deleteFriend } = require('../../controllers/userControllers')

// /api/users
router.route('/')
    .get(getAllUsers)
    .post(addUser)

// /api/users/:userId
router.route('/:userId')
    .get(getOneUser)
    .put(updateUser)
    .delete(deleteUser)

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
    .get(getFriends)
    .delete(deleteFriend)

module.exports = router;
