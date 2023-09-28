const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const empList = ["lokesh", "lokesh2"];
const facList = [];

app.get("/", function (req, res) {
    res.render("index", {EmpList: empList}); 
});

app.get("/employee", function (req, res) {
    res.render("employee");
})

app.post("/employee", function (req, res) {
    const body = req.body;
    let Empname = req.body.Empname;
    empList.push(Empname);
    res.send("Data Recivied Bro");
    console.log(empList);
})

app.get("/faculty", function (req, res) {
    res.sendFile(__dirname + "/Faculty.html");
})

app.post("/faculty", function (req, res) {
    const body = req.body;
    let Facname = req.body.Facname;
    facList.push(Facname);
    res.send("Data Recivied Bro");
    console.log(facList);
})


app.listen(3000, function () {
    console.log("Server is up and running at 3000");
})