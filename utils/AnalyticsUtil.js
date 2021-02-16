
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

exports.MaxInMonths = function(data,siteName,metric,args)
{
  console.log(`MaxInMonths for site=${siteName} when metric=${metric}`);
  if(args.length === 0){
    console.log('No args for MaxInMonths analytic')
  }
  else{
    if(data.error){
      console.log('Error '+JSON.stringify(data.error));
      return data.error;
    }
    else{
      let argsMonths = [];
      args[0].months.forEach(month => {
        argsMonths.push(data.monthly[month]);
      })
      let maxInMon = Math.max.apply(Math, argsMonths)
      console.log(`MaxInMonths = ${maxInMon}`);
      return maxInMon;
    }
  }

}

exports.MinAnnually = function(data,siteName,metric,args)
{
  console.log(`MinAnnually for site=${siteName} when metric=${metric}`);
}


//TODO - implement more Analytics.....