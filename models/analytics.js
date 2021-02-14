const Analytic  = require('../models/analytic.js')

class Analytics {
    constructor(){
      this.analytics = []
    }
    newAnalytic(type, metric, args){
      let a = new Analytic(type, metric, args)
      this.analytics.push(a)
      return a
    }
    get allAnalyticS(){
      return this.analytics
    }
    get numberOfAnalyticS(){
        return this.analytics.length
    }
  }
  module.exports = Analytics