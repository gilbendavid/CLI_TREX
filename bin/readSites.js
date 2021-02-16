#!/usr/bin/env node
console.clear();
const SiteUtil  = require('../utils/siteUtils.js');
const PrintUtil  = require('../utils/printUtil');

PrintUtil.printCommandTitle("Read Sites","white","blue","blue");

SiteUtil.readSites()
.then(data => PrintUtil.printSites(data.sites))
.catch(err => console.log(err));
