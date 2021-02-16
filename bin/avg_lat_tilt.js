#!/usr/bin/env node

console.clear();
const SiteUtil  = require('../utils/siteUtils.js');
const FetchUtil  = require('../services/fetchUtil');
const PrintUtil  = require('../utils/printUtil');

PrintUtil.printCommandTitle("avg_lat_tilt","white","cyan","cyan");

SiteUtil.readSites()
.then(data => 
data.sites.forEach(site => {
    FetchUtil.fetchSite(site,"avg_lat_tilt")
    .then(data => FetchUtil.printFetchSites(data,site,"avg_lat_tilt"))
    .catch(err => console.log(err));          
}))
.catch(err => console.log(err));
