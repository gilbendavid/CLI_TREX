#!/usr/bin/env node
console.clear();
const AnalyticsUtil  = require('../utils/AnalyticsUtil.js');
const FetchUtil  = require('../services/fetchUtil');
const SiteUtil  = require('../utils/siteUtils.js');
const chalk = require("chalk");
const boxen = require("boxen");
const yargs = require("yargs");

const options = yargs
 .usage("Site: -s <name>")
 .option("s", { alias: "name", describe: "Site name", type: "string", demandOption: true })
 .argv;

const commandPrompt = `Selected Site for Analytics ->  ${options.name}!`;


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
console.log(commandPrompt);

SiteUtil.readSite(options.name)
    .then(site => {
        console.log(site)
        AnalyticsUtil.readAnalytics().
        then(data => {
            AnalyticsUtil.printAnalytics(data.analytics)
            data.analytics.forEach(analytic => {
                FetchUtil.fetchSite(site,analytic.metric)
                .then(data => AnalyticsUtil[analytic.type](data,site.siteName,analytic.metric,analytic.args))
            });
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err))



