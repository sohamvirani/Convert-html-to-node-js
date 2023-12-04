
const http = require("http");
const express = require("express");

const app = express();


const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  console.log(req.body.value);

  let firstname = parseInt(req.body.firstname);
  let lastname = parseInt(req.body.lastname);
  let age = parseInt(req.body.age);

  if (age <= 0 || age >= 110) {
    res.status(200).send({
      result: "enter valid age",
    });
  }

  else {
    if (age < 18) {
      res.status(200).send({
        result: "you can not vote",
      });
    }
    else {
      res.status(200).send({
        result: "you can vote",
      });
    }
  }

});

http.createServer(app).listen(5000);