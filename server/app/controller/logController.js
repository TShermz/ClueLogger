import db from "../config/db.config.js";

const sequelize = db.sequelize;
const GeneralLog = db.generalLog;
const EasyLog = db.easyLog;
const MediumLog = db.mediumLog;
const HardLog = db.hardLog;
const EliteLog = db.eliteLog;
const MasterLog = db.masterLog;
const BroadcastLog = db.broadcastLog;
const BroadcastEntry = db.broadcastEntry;
const User = db.user;

async function getLog(req, res) {
  let logName = req.params.logName;
  let userId = req.session.user.id;
  let method = req.method;

  try {
    let commons = await getCommons(logName, userId, method);
    let broadcasts = await getBroadcasts(logName, userId, method);

    res.status(200).json({commons, broadcasts})
  } catch (error) {
    console.log(err);
  }
}

async function updateCommons(req, res) {
  let updatedCommons = req.body;
  let commons;
  try {
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++');
    let commons = await getCommons(req.params.logName, req.session.user.id, req.method);
    await commons.update(updatedCommons);
    await commons.save();

    res.json({message: 'Log successfully updated.'});
  } catch (error) {
    console.log(err);
  }
}

async function getDetailedBroadcasts(req) {

}

async function addBroadcast (req, res){
  let newBroadcast = req.body;

  try {
    if(!req.session.user){
      return res.status(410).json({message: 'Please log in to add broadcasts.'})
    }
    let existingBroadcastLog = await BroadcastLog.findOne({where: {userId: req.session.user.id}});

    if (!existingBroadcastLog){
      return res.status(400).json({message:'Unable to find user entries; please try logging in.'});
    };

    let message = await updateBroadcastLog(req, existingBroadcastLog, newBroadcast);
    let newBroadcastEntry = await BroadcastEntry.create(newBroadcast);
    let user = await User.findOne({where: {id: req.session.user.id}});
    newBroadcastEntry.setUser(user); 

    res.status(200).json({message}); 

  } catch (error) {
    console.log(err);
  }
}

async function getBroadcastById (req, res){

}

//Helper functions

async function getCommons(logName, id, method) {
  let commons;
  const filters = method === 'GET' ? [`${logName}LogId`, "userId"] : '';

  try {
    switch (logName) {
      case "general":
        return await GeneralLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      case "easy":
        return await EasyLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      case "medium":
        return await MediumLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      case "hard":
        return await HardLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      case "elite":
        return await EliteLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      case "master":
        return await MasterLog.findByPk(id, {
          attributes: { exclude: filters },
        });
      default:
        return;
    }
  } catch (error) {
    console.log(error);
  }
};

async function getBroadcasts(logName, id, method) {
  // let broadcasts;
  const hardFilters = ['broadcastLogId', 'userId', 'Ice_dye', 'Third_Age_dye', 'Blood_dye', 'Third_age_druidic_staff', 'Third_age_druidic_cloak', 'Third_age_druidic_wreath', 'Third_age_druidic_robe_top', 'Third_age_druidic_robe_bottom', 'Second-Age_full_helm', 'Second-Age_platebody', 'Second-Age_platelegs', 'Second-Age_sword', 'Second-Age_mage_mask', 'Second-Age_robe_top', 'Second-Age_robe_bottom', 'Second-Age_staff', 'Second-Age_range_coif', 'Second-Age_range_top', 'Second-Age_range_legs', 'Second-Age_bow', "Orlando_Smiths_hat"] ;
  const eliteFilters = ['broadcastLogId', 'userId', 'Explosive_barrel', 'Third_age_ranger_coif', 'Third_age_ranger_body', 'Third_age_ranger_chaps', 'Third_age_vambraces','Third_age_robe_top', 'Third_age_robe', 'Third_age_mage_hat', 'Third_age_amulet', 'Third_age_platelegs', 'Third_age_platebody', 'Third_age_full_helmet', 'Third_age_kiteshield','Second-Age_full_helm', 'Second-Age_platebody', 'Second-Age_platelegs', 'Second-Age_sword', 'Second-Age_mage_mask', 'Second-Age_robe_top', 'Second-Age_robe_bottom', 'Second-Age_staff', 'Second-Age_range_coif', 'Second-Age_range_top', 'Second-Age_range_legs', 'Second-Age_bow', "Orlando_Smiths_hat"];
  const masterFilters = ['broadcastLogId', 'userId', 'Explosive_barrel', 'Third_age_ranger_coif', 'Third_age_ranger_body', 'Third_age_ranger_chaps', 'Third_age_vambraces','Third_age_robe_top', 'Third_age_robe', 'Third_age_mage_hat', 'Third_age_amulet', 'Third_age_platelegs', 'Third_age_platebody', 'Third_age_full_helmet', 'Third_age_kiteshield', 'Third_age_druidic_staff', 'Third_age_druidic_cloak', 'Third_age_druidic_wreath', 'Third_age_druidic_robe_top','Third_age_druidic_robe_bottom'];

  try {
    switch (logName) {
      case "hard":
        return await BroadcastLog.findByPk(id, {
          attributes: { exclude: hardFilters},
        });
      case "elite":
        return await BroadcastLog.findByPk(id, {
          attributes: { exclude: eliteFilters},
        });
      case "master":
        return await BroadcastLog.findByPk(id, {
          attributes: { exclude: masterFilters},
        });
      default:
        return;
    }
  } catch (error) {
    console.log(error);
  }
};



async function updateBroadcastLog(req, existingBroadcastLog, newBroadcastEntry) {
  //three cases: add, edit, or delete
  let method = req.method;
  let broadcastName = newBroadcastEntry.broadcastName;
  let message, updatedBroadcastLog, newValue;

  if(method === 'POST'){
    //update existing log value
    existingBroadcastLog[broadcastName]++;
    // console.log(existingBroadcastLog[broadcastName]);
    // console.log(existingBroadcastLog.broadcastName);
    // console.log(req.session.user.id)
    // return;
    existingBroadcastLog.save();


    //update in database
    // BroadcastLog.update(existingBroadcastLog, {where: {userId: req.session.user.id}});
    return ({message: 'Broadcast log succesfully updated.'});
  } else if(method === 'PUT'){
    return
  } else if (method === 'DELETE'){
    return
  } else {
    return 
  }
}

export default { getLog, updateCommons, getBroadcasts, addBroadcast, getBroadcastById };

// Update a Transaction
function updateTransaction(req, res) {
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
