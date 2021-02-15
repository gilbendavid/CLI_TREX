
const fs = require('fs');
const analyticsFolder = '../assets/Analytics';
const Analytics  = require('../models/analytics.js');

exports.readAnalytics = function()
{
  return new Promise((resolve, reject) => {
    fs.readdir(analyticsFolder, (err, files) => { 
        if (err) 
          reject(err); 
        else { 
          analytics = new Analytics();
          files.forEach(file => { 
              let json_data = require(analyticsFolder+'/'+file);
              let a = analytics.newAnalytic(json_data.type,json_data.metric,json_data.args);
          })
          resolve(analytics);
        } 
      })
    }) 
}

exports.printAnalytics = function(analytics)
{
    analytics.forEach(analytic => {
      console.log(JSON.stringify(analytic));
    })
}

exports.MaxInMonths = function(data,args)
{
  console.log('MaxInMonths');
  console.log(args);
}


exports.MinAnnually = function(data,args)
{
  console.log('-----MinAnnually-----');
  //TODO - implement MinAnnually.....
}


//TODO - implement more Analytics.....