const express = require("express");
const bodyParser = require("body-parser");   // to parse the variables from post method

const app = express();

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(req, res)  // for handling get requests
{
   res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) // for handling post requests
{
   var num1 = Number(req.body.num1);
   var num2 = Number(req.body.num2);
   
   var result = num1+num2;
   res.send("Result Of Calculator is:" + result);
});

app.listen(3000);    // listen to port 3000