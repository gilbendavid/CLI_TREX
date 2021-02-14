#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.blue.bold("T-REX CLI");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "blue",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);