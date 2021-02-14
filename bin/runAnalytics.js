#!/usr/bin/env node
console.clear();
const AnalyticsUtil  = require('../utils/AnalyticsUtil.js');
const chalk = require("chalk");
const boxen = require("boxen");

const commandTitle = chalk.magentaBright.bold("Run Analytics");
const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "magentaBright",
 backgroundColor: "white"
};
const msgBoxTitle = boxen(commandTitle, boxenOptions );
console.log(msgBoxTitle);

AnalyticsUtil.readAnalytics().
then(data => AnalyticsUtil.printAnalytics(data.analytics)



).catch(err => console.log(err));