
const fs = require('fs');
const sitesFolder = '../assets/Sites';
const Sites  = require('../models/sites.js');

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

exports.printSites = function(sites)
{
    sites.forEach(site => {
      console.log(JSON.stringify(site));
    })
}

