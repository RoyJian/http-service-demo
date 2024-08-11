const express = require("express");
const mysql = require("mysql2");
const crypto = require("crypto");

const app = express();
const port = 3000;
const mysqlConnection = mysql.createConnection({
  host: "127.0.0.1",
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  const user = req.body.user;
  const passwd = crypto
    .createHash("sha256")
    .update(req.body.password)
    .digest("hex");
  mysqlConnection
    .promise()
    .query("SELECT * FROM `user` WHERE user=? AND password=?", [user, passwd])
    .then(([rows, _]) => {
      res.status(rows.length > 0 ? 200 : 403).json({
        msg: rows.length ? "success login!" : "user or password error!",
      });
    })
    .catch(console.log);
});

app.listen(port, () => {
  console.log(`exrpress app listening on port ${port}🚀🚀🚀`);
});
