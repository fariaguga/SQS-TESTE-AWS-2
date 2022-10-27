const userService = require('../services/userService');


const addUserController = async (req, res) => {
    try {
        
        const { vehicle, model, location, time } = req.body;

        const { code, user } = await userService.addUserService(
            vehicle,
            model,
            location,
            time,
            );
        if (user) return res.status(code).json({ user });
        return res.status(code).json({ user });
    } catch (error) {
        return console.error(error);
    }
  };

  const getAllUsersController = async (req, res) => {
    try {
        const { code, message, users } = await userService.getAllUsersService();
        if (message) return res.status(code).json({ message });
        return res.status(code).json(users);
    } catch (error) {
        return console.error(error);
    }
  };

module.exports = {
    addUserController,
    getAllUsersController
};  