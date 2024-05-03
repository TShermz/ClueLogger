import db from "../config/db.config.js";
import { isValidPassword } from "../util/auth.js";
import {
  isValidEmail,
  isValidText,
  isValidUsername,
} from "../util/validation.js";
import bcrypt from "bcryptjs";
const { hash } = bcrypt;

// const sequelize = db.sequelize;
const User = db.user;
const GeneralLog = db.generalLog;
const EasyLog = db.easyLog;
const MediumLog = db.mediumLog;
const HardLog = db.hardLog;
const EliteLog = db.eliteLog;
const MasterLog = db.masterLog;
const BroadcastLog = db.broadcastLog;
const BroadcastEntry = db.broadcastEntry;

//Get session data
function getSession(req, res) {
  if (req.session.user) {
    res.json(req.session.user);
  } else res.json({ username: null, email: null, isAuthenticated: false });
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

  const sessionUser = {
    id: user.id,
    username: user.username,
    email: req.body.email,
    isAuthenticated: true,
  };

  req.session.user = sessionUser;
  res.status(201).json({ message: "Logged in successfully.", sessionUser });
}

async function register(req, res) {
  let errors = {};
  let data = req.body;

  if (!isValidEmail(data.email)) {
    message = "Invalid email.";
  } else {
    try {
      const existingEmailUser = await get("email", data.email);
      if (existingEmailUser) {
        message = "Email already exists.";
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!isValidUsername(data.username, 1)) {
    errors.username = "Invalid Username.";
    message = "Invalid username.";
  } else {
    try {
      const existingUsernameUser = await get("username", data.username);
      if (existingUsernameUser) {
        message = "Username already exists.";
      }
    } catch (error) {
      console.error(error);
    }
  }

  if (!isValidText(data.password, 6)) {
    message = "Invalid password. Must be at least 6 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return res.status(422).json({
      message: "User signup failed due to validation errors.",
      errors,
    });
  }

  try {
    const createdUser = await add(data);
    const sessionUser = {
      id: createdUser.id,
      username: createdUser.username,
      email: createdUser.email,
      isAuthenticated: true,
    };
    req.session.user = sessionUser;
    await createInitialTables(createdUser);

    res.status(201).json({ message: "User created.", sessionUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

//Logout
async function logout(req, res, next) {
  console.log("we hit");
  req.session.destroy();

  // req.session.save((err) => {
  //   if (err) next(err);
  //   req.session = null;

  //   req.session.regenerate((err) => {
  //     if (err) next(err);
  //   });
  // });

  const sessionUser = {
    username: null,
    email: null,
    isAuthenticated: false,
  };

  res.status(201).json({ message: "User logged out.", sessionUser });
}

//Helper Functions

async function add(data) {
  data.password = await hash(data.password, 12);

  //sequelize.create
  const createdUser = await User.create(data);

  return createdUser;
}

async function get(field, value) {
  const existingUser = User.findOne({ where: { [field]: value } });

  if (!existingUser) {
    throw new NotFoundError("Could not find user for email " + email);
  }

  return existingUser;
}

async function createInitialTables(createdUser) {
  const generalLog = await GeneralLog.create();
  generalLog.setUser(createdUser);
  const easyLog = await EasyLog.create();
  easyLog.setUser(createdUser);
  const mediumLog = await MediumLog.create();
  mediumLog.setUser(createdUser);
  const hardLog = await HardLog.create();
  hardLog.setUser(createdUser);
  const eliteLog = await EliteLog.create(); 
  eliteLog.setUser(createdUser);
  const masterLog = await MasterLog.create();
  masterLog.setUser(createdUser);
  const broadcastLog = await BroadcastLog.create();
  broadcastLog.setUser(createdUser);
  return;
}

export default { getSession, login, register, logout };
