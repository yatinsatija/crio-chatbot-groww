const express = require("express");
// const mysql = require("mysql");
const cors = require("cors");
var mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// var autoIncrement = require("mongoose-auto-increment");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/chatbot");

var userSchema = new mongoose.Schema({
  name: String,
  password: String,
  email: String,
  date: Date,
  phone: Number,
  skillname: String,
  appplied: String,
  kyc: String,
});

var User = mongoose.model("User", userSchema);

app.post("/register", (req, res) => {
  var myData = new User(req.body);
  if (myData.equity > 100) res.status(400).send("Bad Request #3");
  else {
    myData
      .save()
      .then((item) => {
        res.sendStatus(201);
      })
      .catch((err) => {
        res.status(400).send("unable to save to database");
        console.log(err);
      });
  }
});
app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
app.post("/login", (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  User.find({ email: email }, function (error, user) {
    if (user != []) {
      //render the content.
      username = user[0].name;
      pass = user[0].password;
      if (pass === password) {
        req.session.user = user;

        res.send(user);
      } else res.send({ message: "Wrong email/password combination!" });
    }
    // In case of any error, forward request to error handler.
    else {
      res.status(404).send("User Not Found");
    }
  });
  // db.query("SELECT * FROM customer WHERE email = ?;", email, (err, result) => {
  //   if (err) {
  //     res.send({ err: err });
  //   }

  //   if (result.length > 0) {
  //     bcrypt.compare(password, result[0].password, (error, response) => {
  //       if (response) {
  //         req.session.user = result;
  //         // localStorage.setItem("name", req.session.user.name);
  //         // console.log(req.session.user);
  //         res.send(result);
  //       } else {
  //         res.send({ message: "Wrong email/password combination!" });
  //       }
  //     });
  //   } else {
  //     res.send({ message: "User doesn't exist" });
  //   }
  // });
});
app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});
