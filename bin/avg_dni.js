#!/usr/bin/env node
const SiteUtil  = require('../utils/siteUtils.js');
const FetchUtil  = require('../services/fetchUtil');
const PrintUtil  = require('../utils/printUtil');
PrintUtil.printCommandTitle("avg_dni","white","red","red");

SiteUtil.readSites()
    .then(data => 
    data.sites.forEach(site => {
        FetchUtil.fetchSite(site,"avg_dni")
        .then(data => PrintUtil.printFetchSites(data,site,"avg_dni"))
        .catch(err => console.log(err));          
    }))
    .catch(err => console.log(err));