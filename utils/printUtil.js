const chalk = require("chalk");
const boxen = require("boxen");

exports.printCommandTitle = function(titleText,backColor,borderColor,textColor)
{
    console.clear();
    const commandTitle = chalk[textColor].bold(titleText);
    const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: borderColor,
    backgroundColor: backColor
    };
    const msgBoxTitle = boxen(commandTitle, boxenOptions );
    console.log(msgBoxTitle);
}


exports.printFetchSites = function (data,site,field){
    console.log('-------------------------------');     
    console.log('Site Name:', site.siteName);
    if(data.error){
      console.log(JSON.stringify(data.error));
    }
    else{
      console.log(`${field}:`, JSON.stringify(data));
    }
    console.log('-------------------------------');   
  }


exports.printSites = function(sites)
{
    sites.forEach(site => {
      console.log(JSON.stringify(site));
    })
}

exports.printAnalytics = function(analytics)
{
    analytics.forEach(analytic => {
      console.log('Analytic ' + JSON.stringify(analytic));
    })
}