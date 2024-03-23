/* eslint-disable consistent-return */
const z = require("zod");
const jwt = require("jsonwebtoken");
const Auth = require("../database/data-access-layer/authDAL");
const { JWT_SECRET } = require("../config/config");
const { verifyPassword } = require("../helpers/bcryptConfig");

// const authDAL = new Auth();

exports.signUp = async (req, res, next) => {
  const signUpPayload = z
    .object({
      email: z.string().email(),
      firstName: z.string(),
      lastName: z.string(),
      password: z.string(),
    })
    .required();

  try {
    const { success } = signUpPayload.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        success: false,
        message: "Incorrect inputs",
      });
    }

    const data = await Auth.signUp(req.body);
    console.log("data: ", data);
    if (data) {
      // eslint-disable-next-line no-unused-vars
      const { password, ...otherData } = data?._doc || [];

      const userId = otherData._id;
      console.log("userId: ", userId);
      const token = jwt.sign({ userId }, JWT_SECRET);

      return res.status(201).json({ success: true, data: otherData, token });
    }

    return res.status(409).json({
      success: false,
      message: "User with this email id is already registered",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};

exports.login = async (req, res, next) => {
  const loginPayload = z.object({
    email: z.string(),
    password: z.string(),
  });

  try {
    // checking if the inputs are correct
    const { success } = loginPayload.safeParse(req.body);
    if (!success) {
      return res.status(411).json({
        message: "Incorrect credentials",
      });
    }

    // checking if the user is present -> data = [] when no user found
    const data = await Auth.login(req.body);

    if (data) {
      const { password, ...otherData } = data?._doc || [];

      // check if password is correct
      const isValidPassword = await verifyPassword(req.body.password, password);
      if (!isValidPassword) {
        return res.status(400).json({ success: false, message: "Invalid credentials" });
      }

      const userId = otherData._id;
      const token = jwt.sign({ userId }, JWT_SECRET);

      res.cookie("authToken", token, {
        httpOnly: true,
        secure: true,
        // set the expiration time based on your token expiration
        expires: new Date(Date.now() + 3600000), // 1 hour
      });

      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        data: otherData,
        // token,
      });
    }

    return res.status(400).json({
      success: false,
      message: "User does not exists",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
    next(error);
  }
};
