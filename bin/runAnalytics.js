#!/usr/bin/env node
console.clear();
const AnalyticsUtil  = require('../utils/AnalyticsUtil.js');
const FetchUtil  = require('../services/fetchUtil');
const SiteUtil  = require('../utils/siteUtils.js');
const PrintUtil  = require('../utils/printUtil');
const yargs = require("yargs");

PrintUtil.printCommandTitle("Run Analytics","white","magentaBright","magentaBright");

const options = yargs
 .usage("Site: -s <name>")
 .option("s", { alias: "name", describe: "Site name", type: "string", demandOption: true })
 .argv;

const commandPrompt = `Selected Site for Analytics ->  ${options.name}!`;
console.log(commandPrompt);

SiteUtil.readSite(options.name)
    .then(site => {
        console.log(site)
        AnalyticsUtil.readAnalytics().
        then(data => {
            PrintUtil.printAnalytics(data.analytics)
            data.analytics.forEach(analytic => {
                FetchUtil.fetchSite(site,analytic.metric)
                .then(data => AnalyticsUtil[analytic.type](data,site.siteName,analytic.metric,analytic.args))
            });
        }).catch(err => console.log(err));
    })
    .catch(err => console.log(err))



