const { toHashPassword } = require("../../helpers/bcryptConfig");
const Users = require("../models/Users");

class Auth {
  static async signUp(user) {
    try {
      const tempUser = await Users.findOne({ email: user.email });
      if (tempUser) {
        return false;
      }

      const hashedPassword = await toHashPassword(user.password);

      const newUser = new Users({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      return savedUser;
    } catch (error) {
      throw TypeError(error);
    }
  }

  static async login(user) {
    try {
      const tempUser = await Users.findOne({ email: user.email });
      console.log("tempUser: ", tempUser);
      if (tempUser) {
        return tempUser;
      }
      return false;
    } catch (error) {
      throw TypeError(error);
    }
  }
}

module.exports = Auth;
