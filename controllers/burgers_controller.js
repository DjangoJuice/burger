var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

//Create the router for the app, and export the router at the end of your file.

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
    }
)});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burgerName", "isDevoured"], [req.body.burgerName, req.body.isDevoured], function(results) {
        // What goes into the post response???
    });
})