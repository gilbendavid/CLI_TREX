#!/usr/bin/env node
const SiteUtil  = require('../utils/siteUtils.js');
const FetchUtil  = require('../services/fetchUtil');
const PrintUtil  = require('../utils/printUtil');

PrintUtil.printCommandTitle("avg_ghi","white","green","green");

SiteUtil.readSites()
.then(data => 
data.sites.forEach(site => {
    FetchUtil.fetchSite(site,"avg_ghi")
    .then(data => FetchUtil.printFetchSites(data,site,"avg_ghi"))
    .catch(err => console.log(err));          
}))
.catch(err => console.log(err));