
const fs = require('fs');
const sitesFolder = '../assets/Sites';
const Sites  = require('../models/sites.js');
const Site  = require('../models/site.js');

exports.readSites = function()
{
  return new Promise((resolve, reject) => {
    fs.readdir(sitesFolder, (err, files) => { 
        if (err) 
          reject(err); 
        else { 
          sites = new Sites();
          files.forEach(file => { 
              let json_data = require(sitesFolder+'/'+file);
              let s = sites.newSite(json_data.siteName,json_data.latitude,json_data.longitude);
          })
          resolve(sites);
        } 
      })
    }) 
}

exports.readSite = function(siteName)
{
  return new Promise((resolve, reject) => {
      let json_data = require(sitesFolder+'/'+siteName+'.json');
      let s = new Site(json_data.siteName,json_data.latitude,json_data.longitude);
      resolve(s);
  }) 
}

exports.printSites = function(sites)
{
    sites.forEach(site => {
      console.log(JSON.stringify(site));
    })
}

