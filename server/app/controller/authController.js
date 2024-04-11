import Cookies from "js-cookie";
import db from "../config/db.config.js";
import { createJSONToken, isValidPassword } from "../util/auth.js";
import {
  isValidEmail,
  isValidText,
  isValidUsername,
} from "../util/validation.js";
import bcrypt from "bcryptjs";
const { hash } = bcrypt;

const User = db.users;
const sequelize = db.sequelize;

//Creates relationship between Item and Transaction Tables w/ Sequelize
// User.hasOne(HardLog, {onDelete: 'CASCADE'});

//authentication check
function isAuthenticated(req, res, next) {
  if (!req.session.user) {
    return res.status(401).send("Authentication required");
  }

  // if(req.cookie.token === )
}

async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  let user;
  try {
    // user = await get("email", email);
    user = await User.findOne({ where: { email: email } });
  } catch (error) {
    return res.status(401).json({ message: "Authentication failed." });
  }

  if (!user) {
    return res.status(422).json({
      message: "Email not registed yet.",
      errors: { credentials: "Invalid email." },
    });
  }

  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: "Invalid credentials.",
      errors: { credentials: "Invalid email or password entered." },
    });
  }

  //Creates JWT token
  // const token = createJSONToken(email);
  // const authenticatedUser = await user.update({ token: token });

  //regenerate session
  req.session.regenerate((err) => {
    if (err) next(err);

    req.session.user = req.body.user;
  });

  //Creating JWT Cookie
  // res.cookie("clue_chaser_member_token", authenticatedUser.token, {
  //   signed: true,
  //   maxAge: 9000000,
  //   secure: true,
  // });

  res.status(201).json({ message: "Logged in successfully.", user });
}

async function register(req, res) {
  //Username, Email, Password
  let errors = {};
  let data = req.body;
  console.log(req.session);

  if (!isValidEmail(data.email)) {
    errors.email = "Invalid email.";
  } else {
    try {
      const existingEmailUser = await get("email", data.email);
      if (existingEmailUser) {
        errors.email = "Email exists already.";
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!isValidUsername(data.username, 1)) {
    errors.username = "Invalid Username.";
  } else {
    try {
      const existingUsernameUser = await get("username", data.username);
      if (existingUsernameUser) {
        errors.username = "Username exists already.";
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!isValidText(data.password, 6)) {
    errors.password = "Invalid password. Must be at least 6 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  }

  try {
    const createdUser = await add(data);
    // const token = createJSONToken(createdUser.email);

    req.session.regenerate((err) => {
      if (err) next(err);

      req.session.user = createdUser;
      req.session.save((err) => {
        if (err) next(err);
      });
    });

    // res.cookie("clue_chaser_member_token", token, {
    //   signed: true,
    //   maxAge: 9000000,
    //   secure: true,
    // });
    res.status(201).json({ message: "User created.", user: createdUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

//Logout
async function logout(req, res) {
  req.session.user = null;

  req.sesssion.save((err) => {
    if (err) next(err);

    req.session.regenerate((err) => {
      if (err) next(err);
    });
  });
}

//ForgotPassword

async function add(data) {
  // const userId = generateId();
  data.password = await hash(data.password, 12);

  //sequelize.create
  const createdUser = await User.create(data);

  return createdUser;
}

async function get(field, value) {
  const existingUser = User.findOne({ where: {[field]: value } });

  if (!existingUser) {
    throw new NotFoundError("Could not find user for email " + email);
  }

  return existingUser;
}

var ExpressCookies = Cookies.withConverter({
  write: function (value) {
    // Prepend j: prefix if it is JSON object
    try {
      console.log("attempting to write");
      var tmp = JSON.parse(value);
      if (typeof tmp !== "object") {
        throw new Error();
      }
      value = "j:" + JSON.stringify(tmp);
    } catch (e) {
      console.log("this was an error");
    }

    return Cookies.converter.write(value);
  },
  read: function (value) {
    value = Cookies.converter.read(value);

    // Check if the value contains j: prefix otherwise return as is
    return value.slice(0, 2) === "j:" ? value.slice(2) : value;
  },
});

export default { isAuthenticated, login, register };
