const users = require('../db/user.js');

const userList = async (req, res) => {
    return res.status(200).json(users);
};

const getUser = async (req, res) => {
    const userId = req.params.id;

    const foundUser = users.find(user => user.id.toString() === userId);

    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' });
    }

    return res.status(200).json(foundUser);
};


module.exports = { getUser, userList };
