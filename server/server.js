import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/config/db.config.js";
import authRoutes from "./app/route/auth.route.js";
import cookieParser from "cookie-parser";
import session from "express-session";

import store from 'connect-session-sequelize';
var SequelizeStore = store(session.Store);

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
  credentials: true,
};

var app = express();
app.use(bodyParser.json());
app.use(cookieParser("secretkey"));
app.use(cors(corsOptions));

app.use(
  session({
    secret: "some secret",
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: db.sequelize,
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
    secure: false,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// force: true will drop the table if it already exists
await db.sequelize.sync({ alter: true });

//Instantiate routes
authRoutes(app);

// Create a Server
var server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
