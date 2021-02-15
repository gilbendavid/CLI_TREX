#!/usr/bin/env node
console.clear();
const SiteUtil  = require('../utils/siteUtils.js');
const chalk = require("chalk");
const boxen = require("boxen");

const commandTitle = chalk.blue.bold("Read Sites");
const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "blue",
 backgroundColor: "white"
};
const msgBoxTitle = boxen(commandTitle, boxenOptions );
console.log(msgBoxTitle);

SiteUtil.readSites()
.then(data => SiteUtil.printSites(data.sites))
.catch(err => console.log(err));
