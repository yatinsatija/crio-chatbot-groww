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
  product: Array,
  fds: Array,
  mfs: Array,
});
var stockSchema = new mongoose.Schema({
  productname: String,
  currentprice: String,
  idvalue: String,
  idper: String,
  img: String,
});
var mfSchema = new mongoose.Schema({
  productname: String,
  mfper: String,
  mfyear: String,
  img: String,
});
var fdSchema = new mongoose.Schema({
  fdcmp: String,
  fdint: String,
  fdYear: String,
  img: String,
});

var User = mongoose.model("User", userSchema);
var Stock = mongoose.model("Stock", stockSchema);
var Mf = mongoose.model("Mf", mfSchema);
var Fd = mongoose.model("Fd", fdSchema);

app.post("/register", (req, res) => {
  var myData = new User(req.body);
  if (myData.equity > 100) res.status(400).send("Bad Request #3");
  else {
    myData.product = [];
    myData.fds = [];
    myData.mfs = [];
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
app.post("/addproduct", (req, res) => {
  const email = req.body.username;
  // const password = req.body.password;
  User.find({ email: email }, function (error, user) {
    if (user != []) {
      user[0].product.push(req.body.product);
      user[0].save(function () {});

      res.sendStatus(200);
    } else {
      res.status(404).send("First Login with proper credentials");
    }
  });
});
app.post("/addfd", (req, res) => {
  const email = req.body.username;
  // const password = req.body.password;
  User.find({ email: email }, function (error, user) {
    if (user != []) {
      //render the content.
      user[0].fds.push(req.body.fds);
      user[0].save();
      console.log(user[0].fds);
      res.sendStatus(200);
    }
    // In case of any error, forward request to error handler.
    else {
      res.status(404).send("First Login with proper credentials");
    }
  });
});
app.post("/addmf", (req, res) => {
  const email = req.body.username;
  // const password = req.body.password;
  User.find({ email: email }, function (error, user) {
    if (user != []) {
      //render the content.
      user[0].mfs.push(req.body.mfs);
      user[0].save();
      res.sendStatus(200);
    }
    // In case of any error, forward request to error handler.
    else {
      res.status(404).send("First Login with proper credentials");
    }
  });
});
app.post("/getproducts", function (request, response) {
  const email = request.body.username;
  // console.log("Email" + email);
  // const password = req.body.password;
  User.find({ email: email }, function (error, user) {
    if (user != []) {
      //render the content.
      console.log(user);
      response.status(200).json({
        // id: user[0].id.toString(),
        product: user[0].product,
        fds: user[0].fds,
        mfs: user[0].mfs,
      });
    }
    // In case of any error, forward request to error handler.
    else {
      response.status(404).send("First Login with proper credentials");
    }
  });
  // Pitch.findById(request.params.id, function (error, pitch) {
  //   if (pitch != null) {
  //     //render the content.
  //     response.status(200).json({
  //       id: pitch._id.toString(),
  //       entrepreneur: pitch.entrepreneur,
  //       pitchTitle: pitch.pitchTitle,
  //       pitchIdea: pitch.pitchIdea,
  //       askAmount: pitch.askAmount,
  //       equity: pitch.equity,
  //       offers: pitch.offers,
  //     });
  //   }
  //   // In case of any error, forward request to error handler.
  //   else {
  //     res.status(404).send("Pitch Not Found");
  //   }
  // });
});
app.post("/stocks", (req, res) => {
  var myData = new Stock(req.body);
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
app.get("/stocks", (req, res) => {
  Stock.find().exec(function (error, stocks) {
    // In case of any error, forward request to error handler.
    if (error) {
      next();
    }
    // List of all records from db.
    res.status(200).json(
      stocks.map(function (stock) {
        return {
          id: stock._id.toString(),
          productname: stock.productname,
          currentprice: stock.currentprice,
          idvalue: stock.idvalue,
          idper: stock.idper,
          img: stock.img,
        };
      })
    );
  });
});
app.post("/mf", (req, res) => {
  var myData = new Mf(req.body);
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
app.get("/mf", (req, res) => {
  Mf.find().exec(function (error, mfs) {
    // In case of any error, forward request to error handler.
    if (error) {
      next();
    }
    // List of all records from db.
    res.status(200).json(
      mfs.map(function (mf) {
        return {
          id: mf._id.toString(),
          productname: mf.productname,
          percentage: mf.mfper,
          year: mf.mfyear,
          img: mf.img,
        };
      })
    );
  });
});

app.post("/fd", (req, res) => {
  var myData = new Fd(req.body);
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
app.get("/fd", (req, res) => {
  Fd.find().exec(function (error, fds) {
    // In case of any error, forward request to error handler.
    if (error) {
      next();
    }
    // List of all records from db.
    res.status(200).json(
      fds.map(function (fd) {
        return {
          id: fd._id.toString(),
          companyname: fd.fdcmp,
          percentage: fd.fdint,
          year: fd.fdYear,
          img: fd.img,
        };
      })
    );
  });
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
