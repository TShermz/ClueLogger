import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./app/config/db.config.js";
import authRoutes from "./app/route/auth.route.js";
import logRoutes from "./app/route/log.route.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import store from 'connect-session-sequelize';
var SequelizeStore = store(session.Store);

const corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
  credentials: true
};

var app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));

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
    sameSite: true
  })
);

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// force: true will drop the table if it already exists
await db.sequelize.sync();

//Instantiate routes
authRoutes(app);
logRoutes(app);

// Create a Server
var server = app.listen(8080, function () {
  let host = server.address().address;
  let port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
