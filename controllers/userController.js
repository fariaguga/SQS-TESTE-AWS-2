const userService = require('../services/userService');


const addUserController = async (req, res) => {
    try {
        
        const { vehicle, model, location, time } = req.body;

        const { code, message } = await userService.addUserService(
            vehicle,
            model,
            location,
            time,
            );
        if (message) return res.status(code).json({ message });
        return res.status(code).json({ message });
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