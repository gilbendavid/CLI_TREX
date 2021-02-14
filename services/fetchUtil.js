const fetch = require('node-fetch');
const api_url = "https://developer.nrel.gov/api/solar/solar_resource/v1.json?api_key=DEMO_KEY&";


exports.fetchSite = function(site,field)
{
  let siteUrl = `${api_url}lat=${site.latitude}&lon=${site.longitude}`;
  fetch(siteUrl, {
    method: 'GET',
  })
  .then(response => response.json())
  .then(data => {
    console.log('-------------------------------');     
    console.log('Site Name:', site.siteName);
    if(data.error){
      console.log(JSON.stringify(data.error));
    }
    else{
      console.log(`${field}:`, JSON.stringify((data.outputs)[field]));
    }
    console.log('-------------------------------');   
  })
  .catch((error) => {
    console.error('Error:', error);
})
}


    
