const express = require("express");
const router = new express.Router();
// const conn = require("../Db/Conn");
const conn = require("../Db/Conn");

// register user data
router.post("/create", (req, res) => {
  console.log(req.body);

  const userData = req.body;
  const insertQuery =
    "INSERT INTO usertable (name, email, age, mobile, work, address, description) VALUES(?,?,?,?,?,?,?);";
  const values = [
    userData.name,
    userData.email,
    userData.age,
    userData.mobile,
    userData.work,
    userData.address,
    userData.description,
  ];

  if (
    !userData.name ||
    !userData.email ||
    !userData.age ||
    !userData.mobile ||
    !userData.work ||
    !userData.address ||
    !userData.description
  ) {
    res.status(422).json("plz fill the all data");
  }

  conn.query(insertQuery, values, (err, result) => {
    if (err) {
      console.log("err" + err);
      res.status(402).json({ message: err.message });
    } else {
      res.status(201).json({
        message: "inserted successfully",
        data: req.body,
      });
    }
  });
});
// Get user data
router.get("/getUsers", (req, res) => {
  const selectQuery = "SELECT * FROM usertable";

  conn.query(selectQuery, (err, result) => {
    if (err) {
      console.log("err" + err);
      res.status(500).json({ message: "Error retrieving user data" });
    } else {
      res.status(200).json({ data: result });
    }
  });
});
// user delete api

router.delete("/deleteuser/:id", (req, res) => {
  const { id } = req.params;

  conn.query("DELETE FROM usertable WHERE id = ? ", id, (err, result) => {
    if (err) {
      res.status(422).json("error");
    } else {
      res.status(201).json(result);
    }
  });
});

// get single user

router.get("/induser/:id", (req, res) => {
  const { id } = req.params;

  conn.query("SELECT * FROM users WHERE id = ? ", id, (err, result) => {
    if (err) {
      res.status(422).json("error");
    } else {
      res.status(201).json(result);
    }
  });
});

// update users api

router.patch("/updateuser/:id", (req, res) => {
  const { id } = req.params;

  const data = req.body;

  conn.query("UPDATE users SET ? WHERE id = ? ", [data, id], (err, result) => {
    if (err) {
      res.status(422).json({ message: "error" });
    } else {
      res.status(201).json(result);
    }
  });
});
router.post("/signup", (req, res) => {
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;
  const SQL =
    "INSERT INTO adminuser (email, username, password) VALUES (?, ?, ?)";
  const Uvalues = [sentEmail, sentUserName, sentPassword];
  conn.query(SQL, Uvalues, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      console.log("success User Added");
      res.send({ message: "Success" });
    }
  });
});

// sign in

router.post("/login", (req, res) => {
  const { LoginUserName, LoginPassword } = req.body;
  const SQL = "SELECT * FROM adminuser WHERE username = ? AND password = ?";
  const values = [LoginUserName, LoginPassword];
  conn.query(SQL, values, (err, result) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      if (result.length === 0) {
        res.status(401).send({ message: "Invalid username or password" });
      } else {
        res.send({ message: "Login successful" });
      }
    }
  });
});

// logout

router.post("/logout", (req, res) => {
  req.session.destory((err)=> {
    if (err) {
      res.status(500).json({ message: "Logout failed" });
    } else {
      res.status(200).json({ message: "Logout successful" });
    }
  });
})


module.exports = router;
