#!/usr/bin/env node

console.clear();
const SiteUtil  = require('../utils/siteUtils.js');
const FetchUtil  = require('../services/fetchUtil');
const chalk = require("chalk");
const boxen = require("boxen");

const commandTitle = chalk.cyan.bold("avg_lat_tilt");
const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "cyan",
 backgroundColor: "white"
};
const msgBoxTitle = boxen(commandTitle, boxenOptions );
console.log(msgBoxTitle);

SiteUtil.readSites()
.then(data => 
data.sites.forEach(site => {
    FetchUtil.fetchSite(site,"avg_lat_tilt")
    .then(data => FetchUtil.printFetchSites(data,site,"avg_lat_tilt"))
    .catch(err => console.log(err));          
}))
.catch(err => console.log(err));
