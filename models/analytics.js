const Analytic  = require('./analytic.js')

class Analytics {
    constructor(){
      this.analytics = []
    }
    newAnalytic(type, metric, args){
      let a = new Analytic(type, metric, args)
      this.analytics.push(a)
      return a
    }
    get allAnalytics(){
      return this.analytics
    }
    get numberOfAnalytics(){
        return this.analytics.length
    }
  }
  module.exports = Analytics