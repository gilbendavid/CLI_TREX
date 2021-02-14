const Site  = require('../models/site.js')

class Sites {
    constructor(){
      this.sites = []
    }
    newSite(siteName, latitude, longitude){
      let s = new Site(siteName, latitude, longitude)
      this.sites.push(s)
      return s
    }
    get allSites(){
      return this.sites
    }
    get numberOfSites(){
        return this.sites.length
    }
  }
  module.exports = Sites