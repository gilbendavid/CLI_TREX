const fetch = require('node-fetch');
const api_url = "https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=DEMO_KEY&";


exports.fetchSite = function(site,field)
{
  return new Promise((resolve, reject) => {
      let siteUrl = `${api_url}lat=${site.latitude}&lon=${site.longitude}`;
      fetch(siteUrl, {
        method: 'GET',
      })
      .then(response => response.json())
      .then(data => {
        if(data.error){
          resolve(data);
        }
        else{
          resolve(data.outputs[field]);
        } 
      })
      .catch((error) => {
        reject(error);
    })
})
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


    
