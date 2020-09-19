const express = require("express");
const routes = express.Routes();
const path = require("path");
const { Router } = require("express");

Router.get("/", webcontroller.index)
const webcontroller = require(path.resolve(__dirname,"../controllers/webController"));

router.get('/', webController.index);
router.get('/contact', webController.nosotros);
module.exports = router;

