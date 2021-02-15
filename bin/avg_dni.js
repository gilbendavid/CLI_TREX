#!/usr/bin/env node

console.clear();
const SiteUtil  = require('../utils/siteUtils.js');
const FetchUtil  = require('../services/fetchUtil');
const chalk = require("chalk");
const boxen = require("boxen");

const commandTitle = chalk.red.bold("avg_dni");
const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "red",
 backgroundColor: "white"
};
const msgBoxTitle = boxen(commandTitle, boxenOptions );
console.log(msgBoxTitle);

SiteUtil.readSites()
    .then(data => 
    data.sites.forEach(site => {
        FetchUtil.fetchSite(site,"avg_dni")
        .then(data => FetchUtil.printFetchSites(data,site,"avg_dni"))
        .catch(err => console.log(err));          
    }))
    .catch(err => console.log(err));