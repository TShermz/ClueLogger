import db from "../config/db.config.js";
import { createJSONToken, isValidPassword } from '../util/auth.js';
import {isValidEmail, isValidText} from '../util/validation.js';
import bcrypt from 'bcryptjs';
const {hash} = bcrypt;

const User = db.users;
const sequelize = db.sequelize;

//Creates relationship between Item and Transaction Tables w/ Sequelize
// User.hasOne(HardLog, {onDelete: 'CASCADE'});

async function login(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  let user;
  try {
    // user = await get(email);
    user = await User.findOne({where: {email: email}})
  } catch (error) {
    return res.status(401).json({ message: 'Authentication failed.' });
  }

  if(!user){
    return res.status(422).json({
      message: 'Email not registed yet.',
      errors: { credentials: 'Invalid email.' },
    })
  }

  const pwIsValid = await isValidPassword(password, user.password);
  if (!pwIsValid) {
    return res.status(422).json({
      message: 'Invalid credentials.',
      errors: { credentials: 'Invalid email or password entered.' },
    });
  }

  const token = createJSONToken(email);
  res.json({ token });
}

async function register(req, res) {
  //Username, Email, Password
  let data = req.body;
  let errors = {};

  if (!isValidEmail(data.email)) {
    errors.email = "Invalid email.";
  } else {
    try {
      const existingUser = await get(data.email);
      if (existingUser) {
        errors.email = "Email exists already.";
      }
    } catch (error) {}
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
    const authToken = createJSONToken(createdUser.email);
    return res
      .status(201)
      .json({ message: "User created.", user: createdUser, token: authToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
}

//Logout

//ForgotPassword

async function add(data) {
	// const userId = generateId();
  data.password = await hash(data.password, 12);

  //sequelize.create
  const createdUser = await User.create(data);
  
	return createdUser;
}

async function get (email) {
  const existingUser = User.findOne({where: {email: email}});

	if (!existingUser) {
	  throw new NotFoundError('Could not find user for email ' + email);
	}
  
	return existingUser;
}



//------------------OLD Content----------------//

// Post a Transaction
function create(req, res) {
  let submission = req.body,
    item,
    transaction;

  sequelize
    .sync({ alter: true })
    .then(() => {
      //Find item associated with the name of the new transaction
      return Item.findOne({ where: { name: submission.name } });
    })
    .then((existingItem) => {
      //If null, new item is created. Else, existing item's stats updated w/ new transaction
      if (existingItem === null) {
        return newItem(submission);
      } else {
        updateItem(submission, existingItem);
        return existingItem;
      }
    })
    .then((data) => {
      //Store item object; create new transaction in database
      item = data;
      return Transaction.create(submission);
    })
    .then((result) => {
      //Return new transaction to client
      res.json(result);

      //Establish relationship between item and new transaction
      transaction = result;
      transaction.setItem(item);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Private function: Creates new item in MySQL databse if one does not exist already
function newItem(submission) {
  let item, tPurchased, tSold, profit;

  //Assigns quantity to appropriate Sold/Purchased column
  if (submission.type === "purchase") {
    tPurchased = submission.quantity;
    tSold = 0;
    profit = submission.quantity * submission.price * -1;
  } else {
    tPurchased = 0;
    tSold = submission.quantity;
    profit = submission.quantity * submission.price;
  }

  item = Item.create({
    name: submission.name,
    totalPurchased: tPurchased,
    totalSold: tSold,
    totalTransactions: 1,
    profit: profit,
  })
    .then(() => {
      return Item.findOne({ where: { name: submission.name } });
    })
    .catch((err) => {
      console.log(err);
    });
  return item;
}

//Private Function: Updates item stats for each new/deleted transaction
function updateItem(transaction, item) {
  let transactionCount = 1;
  let profit, totalPurchased, totalSold;

  if (transaction.type === "purchase") {
    totalPurchased = transaction.quantity;
    totalSold = 0;
    profit = transaction.quantity * transaction.price * -1;
  } else if (transaction.type === "sale") {
    totalPurchased = 0;
    totalSold = transaction.quantity;
    profit = transaction.quantity * transaction.price;
  } else {
    //Use cases for deleting items
    //Removes one from total transactions
    transactionCount = -1;

    if (transaction.type === "deletepurchase") {
      //Removes from item purchased quantity; adds back profit from purchase
      totalPurchased = transaction.quantity * -1;
      totalSold = 0;
      profit = transaction.quantity * transaction.price;
    } else {
      //Removes from item sold quantity; removes profit from sale
      totalPurchased = 0;
      totalSold = transaction.quantity * -1;
      profit = transaction.quantity * transaction.price * -1;
    }
  }

  item.totalTransactions += transactionCount;
  item.totalPurchased += totalPurchased;
  item.totalSold += totalSold;
  item.profit += profit;
  console.log("SAVED PROFIT: " + item.profit);

  Item.update(
    {
      totalPurchased: item.totalPurchased,
      totalSold: item.totalSold,
      totalTransactions: item.totalTransactions,
      profit: item.profit,
    },
    { where: { id: item.id } }
  )
    .then(() => {
      console.log("Success");
    })
    .catch((err) => {
      console.log(err);
    });
}

// Fetch all Items
function findAll(req, res) {
  //Gets all transactions by id (/transactions/:id)
  let name = req.params.name;
  if (typeof name === "string") {
    name = name.replace("_", " ");
    Transaction.findAll({ where: { name: name } }).then((transactions) => {
      // Send all transactions with ID to Client
      res.json(transactions);
    });

    //Gets all items (/)
  } else {
    Item.findAll().then((items) => {
      // Send all items to Client
      res.json(items);
    });
  }
}

// Find a Transaction by Id
function findById(req, res) {
  Transaction.findById(req.params.transId)
    .then((transaction) => {
      res.json(transaction);
    })
    .catch((err) => {
      console.log(err);
    });
}

// Update a Transaction
function update(req, res) {
  let transaction = req.body;
  let id = req.body.transId;
  Transaction.update(transaction, { where: { transId: id } })
    .then(() => {
      res
        .status(200)
        .json({ msg: "updated successfully a transaction with id = " + id });
    })
    .catch((err) => res.status(40).json({ msg: err }));
}

// Delete a Transaction by Id
function deleteById(req, res) {
  const id = req.params.transId;
  let item, transaction;

  Transaction.findOne({ where: { transId: id } })
    .then((data) => {
      //stores transaction that is being deleted
      transaction = data;
      return Item.findOne({ where: { name: transaction.name } });
    })
    .then((data) => {
      //stores parent item of transaction being deleted; updates item
      item = data;
      transaction.type = "delete" + transaction.type;
      updateItem(transaction, item);
    })
    .then(() => {
      //once item is updated, child transaction is deleted
      Transaction.destroy({ where: { transId: id } });
    })
    .then(() => {
      res.status(200).json({
        msg: "deleted successfully a transaction with id = " + id,
      });
    });
}

export default { login, register, create, findAll, findById, update, deleteById };
