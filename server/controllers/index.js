const express = require("express");
const app = express();

module.exports = {
doctorController: require("./doctorController"),
recipeController: require("./recipeController"),
noteController: require("./noteController")
}